import { NextRequest, NextResponse } from 'next/server'

// Force dynamic to ensure proper request handling
export const dynamic = 'force-dynamic'

/**
 * Proxy route that fetches audio files and properly handles Range requests.
 * This allows seeking in audio files served by Payload CMS.
 *
 * Usage: /api/stream/worship/file/filename.mp3
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params
  const targetPath = `/api/${path.join('/')}`

  // Build the target URL - use the request origin for proper routing
  const targetUrl = new URL(targetPath, request.url)

  try {
    // Fetch the full file (we need to buffer it to support range requests)
    // Note: This buffers the entire file in memory - suitable for audio files < 128MB
    const fullResponse = await fetch(targetUrl.toString(), {
      headers: {
        // Forward cookies for authenticated requests if needed
        cookie: request.headers.get('cookie') || '',
      },
    })

    if (!fullResponse.ok) {
      return new NextResponse(JSON.stringify({ error: 'File not found' }), {
        status: fullResponse.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Read the full body as an ArrayBuffer
    const arrayBuffer = await fullResponse.arrayBuffer()
    const fileSize = arrayBuffer.byteLength
    const contentType = fullResponse.headers.get('content-type') || 'audio/mpeg'

    const rangeHeader = request.headers.get('range')

    if (rangeHeader && fileSize > 0) {
      // Parse the Range header
      const match = rangeHeader.match(/bytes=(\d*)-(\d*)/)
      if (match) {
        let start = match[1] ? parseInt(match[1], 10) : 0
        let end = match[2] ? parseInt(match[2], 10) : fileSize - 1

        // Clamp values
        start = Math.max(0, start)
        end = Math.min(fileSize - 1, end)

        if (start > end) {
          return new NextResponse(null, {
            status: 416,
            headers: { 'Content-Range': `bytes */${fileSize}` },
          })
        }

        // Slice the buffer for the requested range
        const slicedBuffer = arrayBuffer.slice(start, end + 1)

        return new NextResponse(slicedBuffer, {
          status: 206,
          headers: {
            'Content-Type': contentType,
            'Content-Length': (end - start + 1).toString(),
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        })
      }
    }

    // No range request - return full file
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (_error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to stream file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}





// Converts watch, youtu.be, shorts and embed links to an embeddable URL.
export const toYouTubeEmbed = (url: string): string | null => {
  try {
    const u = new URL(url)
    let id: string | null = null
    if (u.hostname.endsWith('youtu.be')) {
      id = u.pathname.slice(1)
    } else if (u.pathname.startsWith('/watch')) {
      id = u.searchParams.get('v')
    } else {
      const match = u.pathname.match(/^\/(shorts|embed|live)\/([^/]+)/)
      id = match?.[2] ?? null
    }
    return id ? `https://www.youtube.com/embed/${id}` : null
  } catch {
    return null
  }
}

'use client'

import '@videojs/react/video/skin.css'
import { useEffect } from 'react'
import { selectError, usePlayer } from '@videojs/react'
import { Video, VideoPlayer, VideoSkin } from '@videojs/react/video'

interface SeminarVideoPlayerProps {
  src: string
  title: string
  onError?: () => void
}

// The skin's ErrorDialog shows the failure; this lets the parent react to it too.
function ErrorWatcher({ onError }: { onError: () => void }) {
  const error = usePlayer(selectError)?.error
  useEffect(() => {
    if (error) onError()
  }, [error, onError])
  return null
}

export function SeminarVideoPlayer({ src, title, onError }: SeminarVideoPlayerProps) {
  return (
    <VideoPlayer>
      <VideoSkin
        className="overflow-hidden rounded-lg"
        style={{ width: '100%', aspectRatio: '16 / 9' }}
      >
        <Video src={src} title={title} preload="metadata" playsInline />
      </VideoSkin>
      {onError && <ErrorWatcher onError={onError} />}
    </VideoPlayer>
  )
}

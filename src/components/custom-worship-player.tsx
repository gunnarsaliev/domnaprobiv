'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Worship } from '@/payload-types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Search,
  Repeat,
  Repeat1,
} from 'lucide-react'

interface CustomWorshipPlayerProps {
  worshipSongs: Worship[]
}

export function CustomWorshipPlayer({ worshipSongs }: CustomWorshipPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [repeatMode, setRepeatMode] = useState<'none' | 'all' | 'one'>('none')
  const [isSeeking, setIsSeeking] = useState(false)

  // Check for valid songs first
  const validSongs = worshipSongs?.filter((song) => song.url) || []

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'
    const wholeSeconds = Math.floor(seconds)
    const mins = Math.floor(wholeSeconds / 60)
    const secs = wholeSeconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const filteredSongs = validSongs.filter((song) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      song.filename?.toLowerCase().includes(query) ||
      formatDate(song.date).toLowerCase().includes(query)
    )
  })

  const currentTrack = filteredSongs[currentTrackIndex] || validSongs[0]

  const handleNext = useCallback(() => {
    if (currentTrackIndex < filteredSongs.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1)
    } else if (repeatMode === 'all') {
      setCurrentTrackIndex(0)
    }
  }, [currentTrackIndex, filteredSongs.length, repeatMode])

  const calculateTimeFromPosition = useCallback((clientX: number): number => {
    const progressBar = progressBarRef.current
    if (!progressBar || !duration) return 0

    const rect = progressBar.getBoundingClientRect()
    const clickPosition = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, clickPosition / rect.width))
    return percentage * duration
  }, [duration])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isSeeking) {
      const newTime = calculateTimeFromPosition(e.clientX)
      setCurrentTime(newTime)
      if (audioRef.current) {
        audioRef.current.currentTime = newTime
      }
    }
  }, [isSeeking, calculateTimeFromPosition])

  const handleMouseUp = useCallback(() => {
    setIsSeeking(false)
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isSeeking && e.touches[0]) {
      const newTime = calculateTimeFromPosition(e.touches[0].clientX)
      setCurrentTime(newTime)
      if (audioRef.current) {
        audioRef.current.currentTime = newTime
      }
    }
  }, [isSeeking, calculateTimeFromPosition])

  const handleTouchEnd = useCallback(() => {
    setIsSeeking(false)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime)
      }
    }

    const updateDuration = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0
        audio.play()
      } else if (repeatMode === 'all' || currentTrackIndex < filteredSongs.length - 1) {
        handleNext()
      } else {
        setIsPlaying(false)
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('durationchange', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('durationchange', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex, filteredSongs.length, repeatMode, isSeeking, handleNext])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  useEffect(() => {
    // Reset when track changes
    setCurrentTime(0)
    setDuration(0)
  }, [currentTrackIndex])

  // Global mouse/touch event listeners for seeking
  useEffect(() => {
    if (isSeeking) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleTouchEnd)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('touchmove', handleTouchMove)
        window.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isSeeking, duration, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handlePrevious = () => {
    if (currentTime > 3) {
      // If more than 3 seconds into the song, restart it
      if (audioRef.current) {
        audioRef.current.currentTime = 0
      }
    } else if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1)
    } else if (repeatMode === 'all') {
      setCurrentTrackIndex(filteredSongs.length - 1)
    }
  }

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newTime = calculateTimeFromPosition(e.clientX)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSeeking(true)
    handleProgressBarClick(e)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsSeeking(true)
    const touch = e.touches[0]
    const newTime = calculateTimeFromPosition(touch.clientX)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleRepeat = () => {
    setRepeatMode((prev) => {
      if (prev === 'none') return 'all'
      if (prev === 'all') return 'one'
      return 'none'
    })
  }

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  // Early return checks after all hooks
  if (!worshipSongs || worshipSongs.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Все още няма качени песни за хваление.
      </div>
    )
  }

  if (validSongs.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Няма налични песни за изпълнение.
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Use stream proxy that properly handles Range requests for seeking */}
      <audio
        ref={audioRef}
        src={currentTrack.url ? `/api/stream${currentTrack.url.replace('/api', '')}` : ''}
        preload="metadata"
      />

      {/* Main Player Card */}
      <Card className="p-6 bg-gradient-to-br from-background to-muted/20">
        {/* Track Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {currentTrack.filename || `Песен ${currentTrackIndex + 1}`}
          </h2>
          <p className="text-sm text-muted-foreground">{formatDate(currentTrack.date)}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div
            ref={progressBarRef}
            className="relative h-2 bg-secondary rounded-full group cursor-pointer select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Progress fill */}
            <div
              className="absolute h-full bg-primary rounded-full transition-all duration-150 pointer-events-none"
              style={{ width: `${progressPercentage}%` }}
            />
            {/* Draggable thumb */}
            {duration > 0 && (
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ left: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 rounded-full bg-primary-foreground/30"></div>
              </div>
            )}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleRepeat}
              className={repeatMode !== 'none' ? 'text-primary' : ''}
            >
              {repeatMode === 'one' ? (
                <Repeat1 className="h-5 w-5" />
              ) : (
                <Repeat className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handlePrevious}>
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button size="icon" className="h-12 w-12 rounded-full" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNext}>
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 flex-1 justify-end">
            <Button variant="ghost" size="icon" onClick={toggleMute}>
              {isMuted || volume === 0 ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 accent-primary cursor-pointer"
            />
          </div>
        </div>
      </Card>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Търсене по име или дата..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Playlist */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Плейлист ({filteredSongs.length})</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredSongs.map((song, index) => (
            <button
              key={song.id}
              onClick={() => handleTrackSelect(index)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                index === currentTrackIndex && song.id === currentTrack.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{song.filename || `Песен ${index + 1}`}</p>
                  <p className="text-sm opacity-80">{formatDate(song.date)}</p>
                </div>
                {index === currentTrackIndex && song.id === currentTrack.id && isPlaying && (
                  <div className="ml-2 shrink-0">
                    <div className="flex space-x-1 items-end h-4">
                      <div
                        className="w-1 bg-current animate-pulse h-2"
                        style={{ animationDuration: '0.6s' }}
                      ></div>
                      <div
                        className="w-1 bg-current animate-pulse h-3"
                        style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="w-1 bg-current animate-pulse h-4"
                        style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}

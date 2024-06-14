import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isLessonCurrent?: boolean
  onPlay: () => void
}

export function Lesson({
  title,
  duration,
  onPlay,
  isLessonCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      disabled={isLessonCurrent}
      data-active={isLessonCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100 disabled:cursor-pointer"
    >
      {isLessonCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}

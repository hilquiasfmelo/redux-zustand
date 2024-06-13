import { Video } from 'lucide-react'

interface LessonProps {
  key: number
  title: string
  duration: string
}

export function Lesson({ key, title, duration }: LessonProps) {
  return (
    <button key={key} className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="h-4 w-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}

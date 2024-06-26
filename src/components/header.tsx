import { MessageCircle } from 'lucide-react'

import { useCurrentLesson } from '../store/slices/player'

export function Header() {
  // Busca qual é a aula ativa.
  const { currentModule, currentLesson } = useCurrentLesson()

  if (!currentModule || !currentLesson) {
    return null
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentModule.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo - {currentLesson.title}
        </span>
      </div>

      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600">
        <MessageCircle className="h-4 w-4" />
        Deixar feedback
      </button>
    </div>
  )
}

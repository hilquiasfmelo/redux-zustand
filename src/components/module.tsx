import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../store'
import { play } from '../store/slices/player'
import { Lesson } from './lesson'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const dispatch = useDispatch()
  const [parent] = useAutoAnimate()

  const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    return { currentModuleIndex, currentLessonIndex }
  })

  const lessons = useAppSelector(
    // Busca um único módulo trazendo suas lessons pelo seu índice.
    (state) => state.player.course.modules[moduleIndex].lessons,
  )

  return (
    <Collapsible.Root defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="group flex w-full items-center gap-3 bg-zinc-800 p-4 transition-colors data-[state=open]:bg-zinc-950 hover:bg-zinc-950/30">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs group-data-[state=open]:border group-data-[state=open]:border-zinc-50 group-data-[state=open]:font-semibold">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content ref={parent}>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isLessonCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex

            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                isLessonCurrent={isLessonCurrent}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

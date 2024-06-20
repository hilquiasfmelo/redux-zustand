import { useEffect } from 'react'

import { Header } from '../components/header'
import { Module } from '../components/module'
import { Video } from '../components/video'
import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules)

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    document.title = `Aula: ${currentLesson.title}`
  }, [currentLesson])

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-950 text-zinc-50 antialiased">
      <div className="container flex flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}

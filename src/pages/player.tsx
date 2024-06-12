import { ChevronDown, Video } from 'lucide-react'
import ReactPlayer from 'react-player/youtube'

import { Header } from '../components/header'

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50 antialiased">
      <div className="container flex flex-col gap-6">
        <Header />

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <div className="aspect-video w-full bg-zinc-950">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              />
            </div>
          </div>

          <aside className="w-80 border-l border-zinc-800 bg-zinc-900">
            <div>
              <button className="group flex w-full items-center gap-3 bg-zinc-800 p-4 transition-colors hover:bg-zinc-950">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs group-hover:border group-hover:border-zinc-50 group-hover:font-semibold">
                  1
                </span>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Entendendo o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto h-5 w-5 text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                {Array.from({ length: 10 }).map((_, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <Video className="h-4 w-4 text-zinc-500" />
                    <span>Fundamentos do Redux</span>
                    <span className="ml-auto font-mono text-xs text-zinc-500">
                      09:13
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}

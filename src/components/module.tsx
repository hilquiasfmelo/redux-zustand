import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { Lesson } from './lesson'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger className="group flex w-full items-center gap-3 bg-zinc-800 p-4 transition-colors hover:bg-zinc-950 data-[state=open]:bg-zinc-950">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs group-hover:border group-hover:border-zinc-50 group-hover:font-semibold group-data-[state=open]:border group-data-[state=open]:border-zinc-50 group-data-[state=open]:font-semibold">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Lesson key={i} title="Fundamentos do Redux" duration="09:13" />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

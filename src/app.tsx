import { Provider as ReduxProvider } from 'react-redux'

import { AddTodo } from './components/add-todo'
import { TodoList } from './components/todo-list'
import { store } from './store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-zinc-800 text-zinc-50">
        <TodoList />
        <AddTodo />
      </div>
    </ReduxProvider>
  )
}

import { useAppSelector } from '../store'

export function TodoList() {
  // useSelector => busca as informações que podemos acessar do store.
  const todos = useAppSelector((store) => {
    return store.todo
  })

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}

import { type FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../store'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function handleAddNewTodo(event: FormEvent) {
    event.preventDefault()

    // realiza alterações no estado chamando o fatia do reducer criada dentro do store.
    dispatch(
      add({
        newTodo,
      }),
    )

    setNewTodo('')
  }

  return (
    <form onSubmit={handleAddNewTodo}>
      <input
        placeholder="Novo todo"
        className="text-zinc-950 placeholder:text-zinc-800"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

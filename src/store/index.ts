import { configureStore, createSlice } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'

/**
 * Podemos pegar o estado inteiro do app e criar fatias do mesmo,
 * cada fatia terá sua especificação e faremos isso através do createSlice.
 */

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['fazer cafe', 'comer cozidao'],

  // Defini quais ações a interface/usuário pode fazer disparar para realizar alterações dentro estado.
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    },
  },
})

// store => container onde ficarão todos os reducers do app.
export const store = configureStore({
  // reducer => as informações/fatias de estados que serão compartilhadas entre todos os componentes do app.
  reducer: {
    // todo => nome dado a essa fatia de estado definido pelo dev.
    todo: todoSlice.reducer,
  },
})

// exportando as ações que o usuário pode fazer para alterar os estados dos reducers
export const { add } = todoSlice.actions

// Retorna o tipo do retorno da função getState do store.
export type RootState = ReturnType<typeof store.getState>
// useAppSelector => criando tipagem para o useSelector entender as propriedades do store.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

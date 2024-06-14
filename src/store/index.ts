import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'

import { playerSlice } from './slices/player'

/**
 * Podemos pegar o estado inteiro do app e criar fatias do mesmo,
 * cada fatia terá sua especificação e faremos isso através do createSlice.
 */

// store => container onde ficarão todos os reducers do app.
export const store = configureStore({
  // reducer => as informações/fatias de estados que serão compartilhadas entre todos os componentes do app.
  reducer: {
    player: playerSlice,
  },
})

// exportando as ações que o usuário pode fazer para alterar os estados dos reducers

// Retorna o tipo do retorno da função getState do store.
export type RootState = ReturnType<typeof store.getState>
// useAppSelector => criando tipagem para o useSelector entender as propriedades do store.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from './types'

const initialState: UserInfo = {
  synced: false,
  user: null,
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: any, action: PayloadAction<UserInfo>) => {
      state.synced = true
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = slice.actions

export const selectCurrentUser = (state) => state.auth.user

export default slice.reducer

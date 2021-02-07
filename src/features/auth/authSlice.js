import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  synced: false,
  user: null,
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
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

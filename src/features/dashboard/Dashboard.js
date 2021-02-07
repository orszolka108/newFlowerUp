import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'

export default () => {
  const currentUser = useSelector(selectCurrentUser)
  return <div>Hej {currentUser?.email}</div>
}

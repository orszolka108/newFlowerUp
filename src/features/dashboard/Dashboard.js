import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { selectCurrentUser } from '../../features/auth/authSlice'
import { auth } from '../../services/firebase'

export default () => {
  const currentUser = useSelector(selectCurrentUser)
  return (
    <div>
      <p>Hej {currentUser.email}</p>
      <Button onClick={() => auth().signOut()}>Wyloguj się</Button>
    </div>
  )
}

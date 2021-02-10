import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

import { selectCurrentUser } from '../../features/auth/authSlice'
import { auth } from '../../services/firebase'

const LogoutButton = styled(Button)`
  && {
    background: #228c22;
    width: 200px;
  }
`

export const Dashboard = () => {
  const currentUser = useSelector(selectCurrentUser)
  const handleLogoutClick = () => {
    auth().signOut()
  }
  return (
    <div>
      <p>Hej {currentUser.email}</p>
      <LogoutButton onClick={handleLogoutClick}>Wyloguj się</LogoutButton>
    </div>
  )
}

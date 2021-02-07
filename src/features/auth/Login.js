import React from 'react'
import Button from '@material-ui/core/Button'
import { googleAuth } from '../../services/firebase'

export default () => {
  return (
    <div>
      Logowanie
      <Button onClick={googleAuth}>Google login</Button>
    </div>
  )
}

import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

import { googleAuth } from '../../services/firebase'

const GoogleBtn = styled(Button)`
  && {
    background: tomato;
    width: 200px;
  }
`
//TODO: Add TS
//TODO: Add login with email&password

export const Login = () => {
  return (
    <div>
      <GoogleBtn onClick={googleAuth}>Google login</GoogleBtn>
    </div>
  )
}

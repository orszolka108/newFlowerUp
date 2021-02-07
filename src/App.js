import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import useAuthUser from './hooks/useAuthUser'
import Login from './features/auth/Login'
import Dashboard from './features/dashboard/Dashboard'

function App() {
  const currentUser = useAuthUser()

  console.log('currentUser', currentUser)
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Button variant="outlined" color="primary">
                Primary
              </Button>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default App

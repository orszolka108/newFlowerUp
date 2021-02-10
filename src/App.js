import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import { Typography } from '@material-ui/core'

import './App.css'
import useAuthUser from './hooks/useAuthUser'
import Login from './features/auth/Login'
import Dashboard from './features/dashboard/Dashboard'

function App() {
  const currentUser = useAuthUser()

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  }
  return (
    <Router>
      <div className="App">
        {currentUser ? (
          <Link to="/dashboard">Twój dashboard</Link>
        ) : (
          <Link to="/login">Zaloguj się</Link>
        )}
        <header className="App-header">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/">
              <Typography>Cześć nieznajomy!</Typography>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  )
}

export default App

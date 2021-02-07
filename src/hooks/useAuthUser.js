import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectCurrentUser } from '../features/auth/authSlice'
import { auth } from '../services/firebase'

export default () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  useEffect(() => {
    const setUser = (user) => {
      if (user) {
        //change to context
        dispatch(login({ uid: user.uuid, email: user.email }))
      } else {
        dispatch(logout())
      }
    }
    const unsubscribe = auth().onAuthStateChanged(setUser)
    return () => unsubscribe()
  }, [dispatch])

  return currentUser
}

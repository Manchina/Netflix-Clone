import React from 'react'
import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';
const user = false;
const HomePage = () => {
  return (
    <div>
      {user ? <HomeScreen/> : <AuthScreen />}
    </div>
  )
}

export default HomePage
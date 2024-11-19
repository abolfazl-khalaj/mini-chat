import React, { useState } from 'react'
import Login from './pages/Login'

export default function EntryCondition({children}) {

  const token = localStorage.getItem('userToken')  

  const [trigger , setTrigger] = useState(1)

  const funcTriggerHandler = () => {
    setTrigger(prev => prev + 1)
  }


  return (
    <>
      {
         token ? children : <Login funcTrigger={funcTriggerHandler}/>
      }
        

    </>
  )
}

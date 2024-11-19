import React, { useState } from 'react'
import dataStore, { randomID } from '../../data'

export default function UpdateInfoMe() {

  const [infoMe , setInfoMe] = useState(dataStore.infoUser)

  const [passwordCurrent , setPasswordCurrent] = useState()

  let infoUpdatedMe = []
  const getInfoUpdated = (event) => {
    const key = event.target.dataset.value 
    const value = event.target.value 

    infoUpdatedMe[key] = value
  }

  const clickUpdateInfoMe = () => {
    
    if(passwordCurrent === infoMe.password){
      infoUpdatedMe.id = dataStore.infoUser.id 
      infoUpdatedMe.token = dataStore.infoUser.token
      dataStore.infoUser = infoUpdatedMe
      
    }else {
      alert('رمز فعلی درست نیست')
    }


  }

  console.log(infoMe);
  

  return (
    <div className='w-full flex flex-col items-center justify-center mt-5'>

      <h2 className='font-DanaBold text-2xl'>
        تغییر مشخصات خود 
      </h2>

      <div className='flex flex-col gap-y-2 mt-5'>

        <div>
          <input type="text" placeholder={`تغییر نام از ${infoMe.name} به ...`} 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='name'
          onBlur={(event)=>getInfoUpdated(event)}/>
        </div>
        <div>
          <input type="number" placeholder={`تغییر شماره از ${infoMe.phone} به ..`} 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='phone'
          onBlur={(event)=>getInfoUpdated(event)}/>
        </div>
        <div>
          <input type="email" placeholder={`تغییر ایمیل از ${infoMe.email} به ..`}
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='email'
          onBlur={(event)=>getInfoUpdated(event)} />
        </div>
        <div>
          <input type="password" placeholder="رمز فعلی را وارد کنید .." 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          value={passwordCurrent}
          onChange={(event)=>setPasswordCurrent(event.target.value)}
          />
        </div>
        <div>
          <input type="password" placeholder="رمز جدید را وارد کنید .." 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='password'
          onBlur={(event)=>getInfoUpdated(event)}/>
        </div>
        <div className='py-2'>
          <input type="file" />
        </div>


        <div>
          <button className='px-7 py-1 bg-blue-400 text-white rounded-md'
          onClick={()=>clickUpdateInfoMe()}>
            ثبت 
          </button>
        </div>

      </div>
      
    </div>
  )
}

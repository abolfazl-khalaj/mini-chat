import { info } from 'autoprefixer'
import dataStore, { randomID } from '../../data'
import React from 'react'

function idToken() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

export default function Login(props) {


  let infoUser = []
  const getInfoUser = (event) => {

    const key = event.target.dataset.value 
    const value = event.target.value 

    infoUser[key] = value

  }

  const clickLoginUser = () => {
    infoUser.id = randomID()
    infoUser.token = idToken()
    dataStore.infoUser = infoUser
    localStorage.setItem('userToken',infoUser.token)
    props.funcTrigger()
    
  }





  return (
    <div className='absolute inset-0 w-full z-30 bg-white'>

      <div className='m-auto w-1/2 border flex flex-col justify-center items-center gap-y-4 p-3'>

        <div className='w-44 h-44 relative mr-4'>
          <span className='absolute font-DanaMedium bottom-2 right-10 '
          >پروفایل خود
          </span>
          <div className='cursor-pointer'>
            <img src="../../public/img/img.png" alt="" />
          </div>
          <input type="file" className='z-10 absolute inset-0 opacity-0'/>
        </div>

        <div>
          <input type="text" placeholder='نام...' 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='name'
          onBlur={(event)=>getInfoUser(event)}/>
        </div>
        <div>
          <input type="email" placeholder='ایمیل...' 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='email'
          onBlur={(event)=>getInfoUser(event)}/>
        </div>

        <div>
          <input type="number" placeholder='شماره تلفن...' 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='phone'
          onBlur={(event)=>getInfoUser(event)}/>
        </div>
        <div>
          <input type="password" placeholder='پسسورد...' 
          className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-80'
          data-value='password'
          onBlur={(event)=>getInfoUser(event)}/>
        </div>


        <div>
          <button className='px-7 py-1 bg-blue-400 text-white rounded-md'
          onClick={()=>clickLoginUser()}>
            ثبت نام 
          </button>
        </div>

      </div>
      
    </div>
  )
}

import React, { useId, useState } from 'react'
import Login from './Login'
import dataStore, { randomID } from '../../data'
import BoxInfoUser from '../component/BoxInfoUser'
import { getIranianDate } from '../App'

export default function CreateGroup() {

  const [nameGroup , setNameGroup] = useState('')
  const [membersGroup , setMembersGroup] = useState([])

  const addUserFromGroup = userID => {

    const userSelected = dataStore.users.filter(user => user.id == userID)
    const isMemberUser = membersGroup.some(user => user.id === userID)

    if (!isMemberUser){

      setMembersGroup([...membersGroup , ...userSelected])

    }else {

      const updateMembers = membersGroup.filter(user => user.id !== userID)
      setMembersGroup(updateMembers)

    }
    
  }

  const clickCreateGroup = () => {


    const newGroup = {
      id:randomID() , name:nameGroup , img:'group2.png' ,
      friend : false , blocked:false , type:'group' ,
      updated: getIranianDate() , created:getIranianDate() ,
      users : membersGroup , messages:[]
    }

    dataStore.groups.push(newGroup)

    console.log(dataStore.groups);
    
    
    

  }



  return (
    <div className='w-full flex flex-col items-center justify-center mt-5'>

      <h2 className='font-DanaBold text-2xl'>ساخت گروه</h2>

      <div>
        
        <div>

          <div className='w-44 h-44 relative mr-4'>
            <span className='absolute font-DanaMedium bottom-2 right-10 '>پروفایل گروه</span>
            <div className='cursor-pointer'>
              <img src="../../public/img/img.png" alt="" />
            </div>
            <input type="file" className='z-10 absolute inset-0 opacity-0'/>
          </div>
          <div className='mt-6'>
            <input type="text" placeholder='اسم گروه ..'
            className='border-2 border-blue-100 outline-blue-400
          py-1 px-1 rounded-md w-full'
          onBlur={(e)=>setNameGroup(e.target.value)}/>
          </div>

          <div className='mt-6'>
            <button className='bg-blue-500 text-white text-center px-4 py-2 rounded-lg'
            onClick={()=>clickCreateGroup()}>
              ایجاد گروه
            </button>
          </div>

        </div>

        <div className='mt-4'>

          <h2>کابرها برای عضو گروه</h2>

          <ul className='overflow-y-scroll h-48 w-full'>

            {
              dataStore.users.map(user => (

                <BoxInfoUser key={user.id} {...user} changeAddUser={addUserFromGroup}/>

              ))
            }

          </ul>

        </div>

      </div>

      
    </div>
  )
}

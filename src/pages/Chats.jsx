import React, { useContext } from 'react'
import ListChat from '../component/ListChat'
import MainChat from '../component/MainChat';
import { data } from 'autoprefixer';
import dataStore from '../../data';


export default function Chats() {  

  return (
    <div className='flex'>
      <div >
        <ListChat/>
      </div>
      <div className='w-full'>
        <MainChat/>
      </div>
    </div>
  )
}

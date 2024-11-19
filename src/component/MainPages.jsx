import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function MainPages() {
  
  return (
    <div>
      <SideBar/>
      <main className='w-[1200px]'>
        <Outlet/>
      </main>
    </div>
  )
}

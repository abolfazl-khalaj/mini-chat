import React from 'react'
import { BsBoxArrowRight } from 'react-icons/bs'
import { FaUserCog, FaUsers, FaUserSlash } from 'react-icons/fa'
import { GiThreeFriends } from 'react-icons/gi'
import { IoHomeOutline } from 'react-icons/io5'
import { PiChatsDuotone } from 'react-icons/pi'
import { TbMessageCircleUser, TbUsersPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function SideBar() {


  const exportUserPage = () => {
    const isExport = confirm('از خروج صفحه مطمعن هستید ؟')

    if(isExport){
      localStorage.removeItem('userToken')
      window.location.reload()
    }

  }


  return (
    <div className='w-[66px] border-x-2 border-blue-600 absolute right-0 top-0'>

      <ul className='flex flex-col gap-5 justify-center items-center children:border-b border-gray-600 children:w-full children:flex children:justify-center children:py-1'>

        <li className='mb-3 flex justify-center items-center border-b border-gray-600'>
          <PiChatsDuotone size={50} />
        </li>
        <li>
          <Link to={'/'}>
            <IoHomeOutline size={30}/>
          </Link>
        </li>
        <li>
          <Link to={'/update-info-me'}>
            <FaUserCog size={30}/>
          </Link>
        </li>
        <li>
          <Link to={'/create-group'}>
            <TbUsersPlus size={30}/>
          </Link>
        </li>
        <button className='text-red-500' 
        onClick={()=>exportUserPage()}>
          <BsBoxArrowRight size={35}/>
        </button>
        
      </ul>
      
    </div>
  )
}

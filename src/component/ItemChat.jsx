import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdBlock } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ItemChat(props) {
    
  return (
    <Link to={`/${props.type}/${props.id}`} className='w-96 flex justify-between px-3 py-5'>
        <div className='flex items-center gap-2'>
            <div className='w-12 h-12 rounded-3xl'>
                <img className='w-full h-full object-cover rounded-full bg-center' src={`../../public/img/${props.img}`} alt="" />
            </div>
            <div className=''>
                <p className='text-base'>{props.name}</p>
                <span className='line-clamp-1 text-sm w-60'>
                    {
                        props.messages[props.messages.length - 1]?.message 

                    }
                </span>
            </div>
        </div>
        <div className='flex flex-col gap-y-1'>
            <div className='flex gap-1'>
                <button className='cursor-pointer'
                onClick={()=>props.toggleFriendUser(props.id , props.type)}>
                    {
                        props.friend ? 
                        <FcLike size={20}/>
                        :
                        <FcLikePlaceholder size={20}/>
                    }
                </button>
                <div className='cursor-pointer'
                onClick={()=>props.toggleBlockedUser(props.id , props.type)}>
                    {
                        props.blocked ? 
                        <span className='text-[6px] text-green-500'>
                            مسدود نباشد
                        </span>
                        :
                        <span className='text-[6px] font-DanaBold text-red-500'>
                            مسدود شود
                        </span>

                    }
                </div>
            </div>

            <div>
                <span className='text-xs text-gray-600'>
                    {props.updated.slice(0,10)}
                </span>
            </div>
        </div>
    </Link>
  )
}

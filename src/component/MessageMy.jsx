import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function MessageMy(props) {
    
  return (

        <div className='mr-[469px] bg-blue-100 text-black min-w-56 max-w-80 p-2 rounded-lg flex justify-between'>
            <div>
                {
                    props.type === 'G' &&
                    <p className='mb-1 text-sm'>خودم : </p>
                }
                <p>{props.message}</p>
            </div>
            <div className='text-sm flex flex-col justify-between items-end'>
                <button className='hover:text-red-600'
                onClick={()=>props.deleteMessage(props.idMsg)}>
                    <MdDelete />
                </button>
                <span>
                    {props.created.slice(0,5)}
                </span>
            </div>
        </div>

  )
}

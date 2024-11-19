import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function MessageUser(props) {
  return (
    <div>
        <div className=' bg-blue-300 text-white min-w-56 max-w-80 p-2 rounded-lg flex justify-between'>
            <div>
                {
                    props.type === 'G' &&
                    <p className='mb-1 text-sm'>{props.name} : </p>

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
      
    </div>
  )
}

import React from 'react'

export default function BoxInfoUser(props) {

  return (
    <li className='flex justify-between p-3 border items-center'>
        <div className='flex gap-x-1'>

          <div className='w-10 h-10'>
            <img className='w-full h-full object-cover rounded-full' src={`../../public/img/${props.img}`} alt="" />
          </div>
          <div>
            <p>
              {props.name}
            </p>
          </div>

        </div>

        <div>
          <input className='w-5 h-5' type="checkbox"
          onChange={()=>props.changeAddUser(props.id)}/>
        </div>
    </li> 
  )
}

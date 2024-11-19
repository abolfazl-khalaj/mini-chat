import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataStore, { randomID } from '../../data';
import { LuSend } from 'react-icons/lu';
import Chats from '../pages/Chats';
import { getIranianDate } from '../App';
import { MdDelete } from 'react-icons/md';
import MessageMy from './MessageMy';
import MessageUser from './MessageUser';


export default function MainChat() {
    

    const [trigger , setTrigger] = useState(0)

    const idMe = dataStore.infoUser.id

    const { idChat , typeChat } = useParams()
    const [chat , setChat] = useState({})
    const [personMessages , setPersonMessages] = useState([])
    const [groupMessages , setGroupMessages] = useState([])

    const [message , setMessage] = useState('')
    

    useEffect(()=> {

        if(typeChat === 'U'){

            const user = dataStore.users.filter(user => user.id === Number(idChat))
        
            setChat(user[0])
            setPersonMessages(user[0].messages)

        }else {

            const group = dataStore.groups.filter(group => group.id === Number(idChat))
            
            setChat(group[0])
            setGroupMessages(group[0].messages)

        }


    },[idChat , typeChat , trigger])


    const sendMessage = () => {


        
        if(typeChat == 'U'){

            const newMessage= {
                idOwnerMsg : dataStore.infoUser.id ,
                created : getIranianDate().slice(12,17) ,
                idMsg : randomID() ,
                message : message
            }

            dataStore.users.find(user => {

                if(user.id === Number(chat.id)) {
                    user.updated = getIranianDate()
                    user.messages.push(newMessage)
                    setTrigger(prev => prev + 1)
                }
                })

        } else {

            const newMessage= {
                idOwnerMsg : dataStore.infoUser.id ,
                created : getIranianDate().slice(12,17) ,
                name : dataStore.infoUser.name ,
                idMsg : randomID() ,
                message : message
            }

            dataStore.groups.find(group => {

                if(group.id === Number(chat.id)) {

                    group.updated = getIranianDate()
                    group.messages.push(newMessage)
                    setTrigger(prev => prev + 1)

                }

            })

        }

        setMessage('')

    }

    const changeInputMessage = (event) => {
        if(event.keyCode == 13) {
            sendMessage()
        }
    }

    const deleteMessageHandler = (idMessage) => {
        console.log();
        

        if(typeChat == 'G'){

            dataStore.groups.find(group => {

                if (group.id == idChat){
                    
                    const messages = group.messages.filter(msg=> msg.idMsg !== idMessage)
                    group.messages = messages

                    setTrigger(prev => prev + 1)
                    
                }

            })


        }else {


            dataStore.users.find(user => {

                if (user.id == idChat){
                    
                    const messages = user.messages.filter(msg=> msg.idMsg !== idMessage)
                    user.messages = messages

                    setTrigger(prev => prev + 1)
                    
                }

            })
            
            
        }
        
        

    }




    
  return (
    <div className='p-3'>

        <div className='flex gap-2 border-b-2 w-full pb-2'>
            <div className='w-16 h-16'>
                <img className='w-full h-full object-cover rounded-full'
                src={`../public/img/${chat.img}`} alt="" />
            </div>
            <p className='mt-3 text-2xl font-DanaBold'>{chat.name}</p>
        </div>

        <div className='h-[470px] '>
            
            <div className='relative flex flex-col gap-y-3 overflow-y-scroll h-[462px] pl-1 py-4'>

                {   
                    typeChat !== 'G' ? 
                    personMessages.map(message => {                        

                        return message.idOwnerMsg === dataStore.infoUser.id ? (

                            <MessageMy key={message.idMsg} {...message} type={'U'} deleteMessage={deleteMessageHandler}/>
                        )
                        :
                        (
                            <MessageUser key={message.idMsg} {...message} type='U' deleteMessage={deleteMessageHandler}/>
                        )


                    })

                    :

                    groupMessages.map(message => {

                        return message.idOwnerMsg === dataStore.infoUser.id ? (

                            <MessageMy key={message.idMsg} {...message} type='G' deleteMessage={deleteMessageHandler}/>
                        )
                        :
                        (
                            <MessageUser key={message.idMsg} {...message} type='G' deleteMessage={deleteMessageHandler}/>
                        )


                    })

                }









            </div>

        </div>

        <div className=''>
            <div className='flex'>
                <button className='pl-2 pr-3 mx-1 text-blue-500 bg-blue-200 rounded-full'
                onClick={()=>sendMessage()}>
                    <LuSend size={25} />
                </button>
                <input type="text" placeholder='پیغام خود را تایپ کنید ..'
                className='w-full py-2 px-1 outline-blue-200 border-blue-100 border' 
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
                onKeyDown={(event)=>changeInputMessage(event)}/>
            </div>
        </div>
      
    </div>
  )




}

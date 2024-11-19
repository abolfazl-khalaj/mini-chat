import React, { useEffect, useState } from 'react'
import ItemChat from './ItemChat'
import dataStore, { randomID } from '../../data'
import { useParams } from 'react-router-dom'


export default function ListChat() {

  const {idChat} = useParams()
  

  const [trigger , setTrigger] = useState(1)
  
  const [messageBoxChat , setMessageBoxChat] = useState('گزینه برای چت وجود ندارد')

  const [chats , setChats] = useState([]) 


  const convertJalaliToGregorian = (jalaliDate) => {
    const jalaliParts = jalaliDate.split('/');
    const yearJ = parseInt(jalaliParts[0]);
    const monthJ = parseInt(jalaliParts[1]);
    const dayJ = parseInt(jalaliParts[2]);

    const date = new Date(yearJ, monthJ - 1, dayJ); 

    return date;
  }
  

  const extractUpdatedDate = (updated) => {

    const [jalaliDate, time] = updated.split(', ');
    const [year, month, day] = jalaliDate.split('/');
    const date = convertJalaliToGregorian(jalaliDate);

    const [hours, minutes, seconds] = time.split(':');
    date.setHours(parseInt(hours), parseInt(minutes), parseInt(seconds));

    return date;
  }

  

  useEffect(()=> {

    setChats([...dataStore.users , ...dataStore.groups])


    setChats(prev => {

      return prev.sort((a, b) => {
        const dateA = extractUpdatedDate(a.updated);
        const dateB = extractUpdatedDate(b.updated);
        return dateB - dateA ;  // برای نزدیکترین تاریخ به دورترین تاریخ
      });

    
    })

    

    

  },[trigger , idChat])

  
  const clickStateChats = (event) => {

    const stateChats  = event.target.id 

    switch (stateChats) {

      case 'all' : {

        setChats([...dataStore.users , ...dataStore.groups])
        break
        
      }
      case 'person' : {
        setChats([...dataStore.users])

        setMessageBoxChat('چت شخصی وجود ندارد')

        break
        
      }
      case 'group' : {
        setChats([...dataStore.groups])

        setMessageBoxChat('گروه چت وجود ندارد')

        break
        
      }
      case 'friend' : {
        const groups = dataStore.groups.filter(group => group.friend)
        const users = dataStore.users.filter(user => user.friend)

        setMessageBoxChat('شخص یا گروهی در بخش صمیمانه شما وجود ندارد')

        setChats([...groups , ...users])
        break
        
      }
      case 'blocked' : {
        const groups = dataStore.groups.filter(group => group.blocked)
        const users = dataStore.users.filter(user => user.blocked)

        setMessageBoxChat('شخص یا گروهی مسدود نکردید')
        
        setChats([...users , ...groups])
        break
        
      }

      default : {
        setChats([...dataStore.users , ...dataStore.groups])
        setMessageBoxChat('گزینه ای برای چت وجود ندارد')
        break

      }
    }
    

  }


  const toggleFriendUserHandler = (chatID , typeChat) => {

    if(typeChat === 'U'){

      dataStore.users.map(user => user.id == chatID ? user.friend = !user.friend : user)
      setTrigger(prev => prev + 1)

    }else {

      dataStore.groups.map(group => group.id == chatID ? group.friend = !group.friend : group)
      setTrigger(prev => prev + 1)

    }
    
  }

  const toggleBlockedUserHandler = (chatID , typeChat) => {

    if(typeChat === 'U'){

      dataStore.users.map(user => user.id == chatID ? user.blocked = !user.blocked : user)
      setTrigger(prev => prev + 1)

    }else {

      dataStore.groups.map(group => group.id == chatID ? group.blocked = !group.blocked : group)
      setTrigger(prev => prev + 1)

    }
  }


  const searchingChats = valueSearch => {

    if(!chats.length){
      
      setMessageBoxChat('چتی با این اسم وجود ندارد')
      
    }

    const groups = dataStore.groups.filter(group => group.name.includes(valueSearch))

    const users = dataStore.users.filter( user => user.name.includes(valueSearch))

    setChats([...groups , ...users])


    

  }


  


  return (
    <div className='flex flex-col border-blue-400 children:border-b-2 children:border-x-2 children:border-blue-400 h-[600px] overflow-y-scroll'>

      <div className='w-full py-1 px-3'>
        <div>
          <input type="text" placeholder='جستجو کنید ...' className='w-full px-3 py-1 text-sm rounded-sm border border-blue-400 outline-blue-700 ' 
          onInput={(event)=>searchingChats(event.target.value)}/>
        </div>
      </div>

      <div className='h-12 w-full'>
        <ul className='flex w-full children:h-12 children:w-1/4'
        onClick={(event)=>clickStateChats(event)}>

          <li className='hover:bg-blue-100 transition-all flex justify-center items-center' id='all'>
            همه
            </li>
          <li className='hover:bg-blue-100 transition-all flex justify-center items-center' id='prison'>
            شخصی
            </li>
          <li className='hover:bg-blue-100 transition-all flex justify-center items-center' id='group'>
            گروه ها
            </li>
          <li className='hover:bg-blue-100 transition-all flex justify-center items-center' id='friend'>
            پسندیده ها
            </li>
          <li className='hover:bg-blue-100 transition-all flex justify-center items-center' id='blocked'>
            مسدود ها
            </li>

        </ul>
      </div>


      <div>

        {
          chats && chats.length > 0 ?
          chats.map(chat => (
            
            !chat.ImBlocked &&           
            <ItemChat key={randomID()} {...chat} 
            type={chat.type === 'group' ? 'G':'U'}
            toggleFriendUser={toggleFriendUserHandler}
            toggleBlockedUser={toggleBlockedUserHandler}/>

          ))
          :
          <div className='w-96 h-24 flex justify-center items-center font-DanaMedium'>
            {messageBoxChat}
          </div>
        }

      </div>


      
    </div>
  )
}

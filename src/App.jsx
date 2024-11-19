import { useId, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import EntryCondition from './EntryCondition'
import PanelChat from './pages/PanelChat'
import Chats from './pages/Chats'
import MainPages from './component/MainPages'
import UpdateInfoMe from './pages/UpdateInfoMe'
import CreateGroup from './pages/CreateGroup'
import { data } from 'autoprefixer'
import { ImReddit } from 'react-icons/im'

export function getIranianDate() {

  const options = {
      timeZone: 'Asia/Tehran',  // تایم‌زون ایران
      year: 'numeric',
      month: '2-digit',   // نمایش ماه به صورت دو رقمی
      day: '2-digit',     // نمایش روز به صورت دو رقمی
      hour: '2-digit',    // نمایش ساعت به صورت دو رقمی
      minute: '2-digit',  // نمایش دقیقه به صورت دو رقمی
      second: '2-digit',  // نمایش ثانیه به صورت دو رقمی
      hour12: false       // ساعت به صورت 24 ساعته
  };
  
  const iranTime = new Date().toLocaleString('fa-IR', options);

    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    let englishDateStr = iranTime;
    for (let i = 0; i < persianNumbers.length; i++) {
        englishDateStr = englishDateStr.replaceAll(persianNumbers[i], englishNumbers[i]);
    }

  
  return englishDateStr;
}


function App() {

  


  return (
    <div className='w-10/12 relative m-auto flex justify-end mt-9 font-Dana'>
      {

        <Routes>
          
          <Route path='' 
          element={<EntryCondition><MainPages/></EntryCondition>}>
            <Route path='/' element={<PanelChat/>} />
            <Route path='/:typeChat/:idChat' element={<Chats/>}/>
            <Route path='/update-info-me' element={<UpdateInfoMe/>}/>
            <Route path='/create-group' element={<CreateGroup/>}/>
            
          </Route>

        </Routes>

      }
    </div>
  )
}

export default App

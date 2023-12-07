import React from 'react'
import { BsXCircleFill,BsNewspaper,BsPen,BsEnvelopePaper,BsBook,BsCashCoin,BsTelephone,BsHouse,BsFire } from 'react-icons/bs'
function sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFire  className='icon_header'/> BIT
            </div>
        <span className='icon close_icon' onClick={OpenSidebar}><BsXCircleFill /></span>
       </div>
       <ul className='siderbar-list'>
       <a href='/'><li className='sidebar-list-item'>
            <BsNewspaper className='icon' />Dashboard
        </li></a>
       <a href='/examvenue'><li className='sidebar-list-item'>
            <BsPen className='icon' />Exam Venue
        </li></a>
       <a href='/result'><li className='sidebar-list-item'>
            <BsEnvelopePaper className='icon' />Result
        </li></a>
       <a href='/skillvenue'><li className='sidebar-list-item'>
            <BsBook className='icon' />Skill venue
        </li></a>
       <a href='/revaluation'><li className='sidebar-list-item'>
            <BsCashCoin className='icon' />Revaluation
        </li></a>
       <a href=''><li className='sidebar-list-item'>
            <BsTelephone className='icon' />Help Desk
        </li></a>
       </ul>
    </div>
  )
}

export default sidebar

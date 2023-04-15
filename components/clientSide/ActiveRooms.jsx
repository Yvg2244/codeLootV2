'use client'
import React from 'react'
import ActiveRoomCard from './ActiveRoomCard'
const ActiveRooms = () => {
  return (
    <div className='flex w-full  pb-[2rem] gap-[18px] items-center  flex-wrap'>
        
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
        <ActiveRoomCard topics="Array" questions="5" difficulty="Easy" duration="15" entryFee="40"></ActiveRoomCard>
    </div>
  )
}

export default ActiveRooms
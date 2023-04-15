'use client'
import React from 'react'
import RoomPageQuestionSection from '../../components/clientSide/RoomPageQuestionSection'
import RoomPageQuestionDisplaySection from '../../components/clientSide/RoomPageQuestionDisplaySection'
import RoomPageEditorSection from '../../components/clientSide/RoomPageEditorSection'
import LeaderBoardComponent from '../../components/clientSide/LeaderBoardComponent'
import WaitingRoomModal from '../../components/clientSide/WaitingRoomModal'
import { useState } from 'react'
const RoomPage = () => {
  const [waitingRoomRequest, setWaitingRoomRequest] = useState(true);
  return (
    <div className='flex w-full min-h-screen h-[100vh] bg-primary_gray text-primary_green '>
       {
        <WaitingRoomModal
        openWaitingRoomModal={waitingRoomRequest}
        onCloseWaitingRoomModal={() => {
            setWaitingRoomRequest(!waitingRoomRequest);
          }}
        />
      }
      <RoomPageQuestionSection/>
     <RoomPageQuestionDisplaySection/>
     <RoomPageEditorSection/>
     <LeaderBoardComponent/>
    </div>
  )
}

export default RoomPage
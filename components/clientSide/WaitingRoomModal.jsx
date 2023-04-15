'use client'
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { useStateValue } from "../../app/context/store";
const WaitingRoomModal = ({ openWaitingRoomModal, onCloseWaitingRoomModal}) => {
  if (!openWaitingRoomModal) return null;
  const [{ newRoom }, dispatch] = useStateValue();
  const [remainingMinute, setRemainingMinute] = useState(0);
  const [remainingHour, setRemainingHour] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const TIME = new Date();
      setRemainingMinute(newRoom.startTimeMinute - TIME.getMinutes());
      setRemainingHour(newRoom.startTimeHour - TIME.getHours());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return document.getElementById("joinRoomPortal")? ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[15rem] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
        {remainingMinute > 0 ? (
          <>
            <div className="text-primary_green font-monte">Room unlocks in</div>
            <div className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black">
              {remainingHour}:{remainingMinute} min
            </div>
          </>
        ) : (
          <div
            className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
            onClick={onCloseWaitingRoomModal}
          >
            Enter Room
          </div>
        )}
      </div>
    </div>,
    document.getElementById("joinRoomPortal")
  ):null;
};

export default WaitingRoomModal;

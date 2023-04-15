'use client'
import React from "react";
import { FiShare2 } from "react-icons/fi";
import Image from 'next/image'
import GrpIcon from '../../assests/community.svg';
const ActiveRoomCard = ({ topics, questions, difficulty, duration, price }) => {
  return (
    <div className="flex flex-col bg-primary_gray_light rounded-lg w-[15rem] py-[1rem] px-[12px] gap-[20px] font-inter text-white h-[auto]">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-[18px] tracking-widest font-inter">
          Rick Rules
        </span>
        <div className="w-[auto] py-[8px] rounded-3xl bg-primary_gray justify-center items-center px-[14px] flex gap-2">
          <div>
            <Image src={GrpIcon} alt="" height='100%' width='100%' />
          </div>
          <span className="text-primary_green text-[12px]">40</span>
        </div>
      </div>
      <div className="flex flex-col text-[13px] gap-[11.4px]">
        <div className="flex gap-2">
          <span className="text-gray-400">Topics: </span>
          {topics}
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">No. of Questions: </span>
          {questions}
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">Difficulty: </span>
          {difficulty}
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">Duration: </span>
          {duration} min
        </div>
        <div className="flex gap-[6px]">
          <span className="text-primary_green">Schedule Time: </span>
          <p className="text-primary_green">12:00</p>
        </div>
      </div>
      <div className="justify-between mt-[8px] items-center flex w-full">
        <FiShare2 className="text-[22px]" />
        <div className="text-[14px] px-[18px] py-[4px] rounded-md bg-primary_green text-black ">
          <span className="font-semibold text-black">Join for $40</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveRoomCard;

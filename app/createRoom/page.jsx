"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CreateRoomModal from "../../components/clientSide/CreateRoomModal";
import { useStateValue } from "../context/store";
import { v4 as uuid } from "uuid";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
const page = () => {
  const [{ newRoom }, dispatch] = useStateValue();
  const [createRoomRequest, setcreateRoomRequest] = useState(false);
  const [requestedRoom, setRequestedRoom] = useState({
    topic: "",
    duration: "",
    noOfQuestions: "",
    startTime: "",
    startDate:"",
    roomType: "public",
    difficulty: "",
  });
  // const [topic, setTopic] = useState("");
  // const [duration, setDuration] = useState("");
  // const [noOfQuestions, setNoOfQuestonsQuestions] = useState("");
  // const [startTime, setStartTime] = useState("");
  // const [startTimeHour, setStartTimeHour] = useState("");
  // const [startTimeMinute, setStartTimeMinute] = useState("");
  // const [roomType, setRoomType] = useState("public");
  // const [difficulty, setDifficulty] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const handleCreateRoomFormChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    console.log(name,value)
    setRequestedRoom((prev)=>{
        return {
          ... prev,[name]:value

        }
    })
  }


  const submitCreateRoomForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_NEW_ROOM",
      newRoom: {
        ...requestedRoom,
        id: small_id,
        "startTimeHour": requestedRoom.startTime?.split(':')[0],
        "startTimeMinute": requestedRoom.startTime?.split(':')[1],
        "startTimeSecound": "00",
        participant: [],
        questions: [],
        winner: "",
      },
    });
    setcreateRoomRequest(!createRoomRequest);

    axios
      .post(
        "https://devs-clash.onrender.com/send",
        {
          ...newRoom,
          participant: [{ id: "123", solved: Array(noOfQuestions).fill(0) }],
          questions: [],
          winner: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(newRoom);
        console.log(Object.values(response));
        dispatch({
          type: "SET_QUESTIONS",
          questions: Object.values(response.data.questions),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="w-full  bg-black font-inter text-white h-[auto] flex flex-col justify-center items-center p-4">
      {
        <CreateRoomModal
          openRoomModal={createRoomRequest}
          onCloseRoomModal={() => {
            setcreateRoomRequest(!createRoomRequest);
          }}
        />
      }
      <form
        className="grid-cols-2 items-center text-[1.25rem] pt-[4rem] grid px-5 w-[50rem] gap-9"
        onSubmit={submitCreateRoomForm}
      >
        <h2 className=" col-start-1 text-[35px] flex items-center gap-3 col-span-2 tracking-wide mb-4">
          Rick Rules <BsPencilSquare className="text-[18px]" />
        </h2>

        <label htmlFor="topic">Topic</label>
        <select
          className="text-[16px] text-[#999999] bg-[#363636] py-2 px-3 items-center"
          required
          id="topic"
          name="topic"
          value={requestedRoom.topic}
          onChange={handleCreateRoomFormChange}
        >
          <option value="">Select Topic</option>
          <option value="Array">Array</option>
          <option value="Loop">Loop</option>
          <option value="String">String</option>
          <option value="Graphs">Graphs</option>
        </select>

        <label htmlFor="duration">Duration</label>
        <div
          id="duration"
          value={requestedRoom.duration}
          onChange={handleCreateRoomFormChange}
          name="duration"
          className="flex text-[16px] justify-between  gap-5"
        >
          <input
            className=""
            type="radio"
            id="quater"
            name="duration"
            value="15"
          />
          <label className="text-[#999999]" htmlFor="quater">
            15
          </label>

          <input
            className=""
            type="radio"
            id="half"
            name="duration"
            value="30"
          />
          <label className="text-[#999999]" htmlFor="half">
            30
          </label>

          <input
            className=""
            type="radio"
            id="semi"
            name="duration"
            value="45"
          />
          <label className="text-[#999999]" htmlFor="semi">
            45
          </label>

          <input
            className=""
            type="radio"
            id="full"
            name="duration"
            value="60"
          />
          <label className="text-[#999999]" htmlFor="full">
            60
          </label>
        </div>

        <label htmlFor="noOfQuestions">No of Question</label>
        <select
          required
          className="py-2 text-[#999999] bg-primary_gray_light"
          id="noOfQuestions"
          name="noOfQuestions"
          value={requestedRoom.noOfQuestions}
          onChange={handleCreateRoomFormChange}
        >
          <option className="" value="">
            Select number of Questions
          </option>
          <option className="" value="1">
            1
          </option>
          <option className="" value="2">
            2
          </option>
          <option className="" value="3">
            3
          </option>
          <option className="" value="5">
            5
          </option>
          <option className="" value="6">
            6
          </option>
          <option className="" value="7">
            7
          </option>
          <option className="" value="8">
            8
          </option>
          <option className="" value="9">
            9
          </option>
          <option className="" value="10">
            10
          </option>
        </select>

        <label htmlFor="roomTime">Schedule Time</label>
        <div
          id="roomTime"
          className="flex text-[16px] gap-5"
          value={requestedRoom.startTime}
          name="startTime"
          onChange={handleCreateRoomFormChange}
        >
          <input
            className="py-2  text-[#999999] bg-[#363636]"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            id="roomtimeDate"
            name="startDate"
          />
          <input
            className="py-2 text-[#999999] bg-[#363636]"
            type="time"
            id="roomTimeTime"
            name="startTime"
          />
        </div>

        <label htmlFor="difficulty">Difficulty</label>

        <div
          id="difficulty"
          className="flex gap-5 justify-between"
          value={requestedRoom.difficulty}
          name="difficulty"
          onChange={handleCreateRoomFormChange}
        >
          <input type="radio" id="easy" name="difficulty" value="Easy" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="easy">
            Easy
          </label>

          <input
            type="radio"
            id="medium"
            name="difficulty"
            value="Medium"
          />
          <label className="bg-[#363636] text-[#999999]" htmlFor="medium">
            Medium
          </label>

          <input type="radio" id="hard" name="difficulty" value="Hard" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="hard">
            Hard
          </label>
        </div>
        <label htmlFor="roomType">Room Type</label>
        <div
          id="roomType"
          value={requestedRoom.roomType}
          className="flex gap-5 justify-between"
          name="roomType"
          onChange={handleCreateRoomFormChange}
        >
          <input type="radio" id="public" name="roomType" value="public" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="public">
            Public
          </label>

          <input type="radio" id="private" name="roomType" value="private" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="private">
            Private
          </label>
        </div>

        <button
          type="submit"
          className="py-[6px] px-[36px] text-[16px]  font-medium font-inter tracking-wide rounded-md items-center justify-center flex bg-primary_green text-black"
        >
          Create Room
        </button>
        <Link
          href="/"
          className="py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md items-center justify-center flex border-2 border-white text-white"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default page;

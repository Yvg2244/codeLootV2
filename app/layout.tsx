'use client'
import "@/styles/globals.css";
import Navbar from "../components/serverSide/Navbar";
import { StateContext } from "./context/store";
import { useReducer } from "react";
import { reducer,initialState } from "./context/reducer_file";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StateContext.Provider value={useReducer(reducer, initialState)}>
          <Navbar />
          <div id="joinRoomPortal"></div>
          <div id="createRoomPortal"></div>
          {children}
        </StateContext.Provider>
      </body>
    </html>
  );
}

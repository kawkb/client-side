import React from 'react'
// import { createContext, useContext, useEffect, useState } from 'react';
import ChatSideBar from './atoms/ChatSideBar'
import ChatBox from './atoms/ChatBox'

function ChatDisplay() {

  return (
	// <div className='chat-page'>

		<div className='chat-container'>
			<ChatSideBar />
			<ChatBox />
		</div>
	// </div>
  )
}

export default ChatDisplay
import React from 'react'
// import { createContext, useContext, useEffect, useState } from 'react';
import ChatSideBar from './ChatSideBar'
import ChatBox from './ChatBox'

function ChatDisplay() {

  return (
	<div className='chat-page'>
		<div className='chat-container'>
			<ChatSideBar />
			<ChatBox />
		</div>
	</div>
  )
}

export default ChatDisplay
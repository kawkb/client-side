import React from 'react'
// import { createContext, useContext, useEffect, useState } from 'react';
import ChatSideBar from './atoms/ChatSideBar'
import ChatBox from './atoms/ChatBox'
import ChatSearch from './atoms/ChatSearch'
import ChatSearchPlus from './atoms/ChatSearchPlus'

function ChatDisplay({sideheader} : {sideheader: React.ReactNode;}) {

  return (
	// <div className='chat-page'>

		<div className='chat-container'>
			<ChatSideBar header={sideheader} />
			<ChatBox />
		</div>
	// </div>
  )
}

export default ChatDisplay
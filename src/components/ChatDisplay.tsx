import React from 'react'
// import { createContext, useContext, useEffect, useState } from 'react';
import ChatSideBar from './atoms/ChatSideBar'
import ChatBox from './atoms/ChatBox'
import ChatSearch from './atoms/ChatSearch'
import ChatSearchPlus from './atoms/ChatSearchPlus'
import ChatsList from './atoms/ChatsList'

function ChatDisplay() {

  return (
	<div className='chat-container'>
			<div className='chat-side-bar copy-book-background retro-border-box trans-orange-box'>
				<ChatSearchPlus/>
				<ChatsList />
			</div>
			<ChatBox />
		</div>
  )
}

export default ChatDisplay
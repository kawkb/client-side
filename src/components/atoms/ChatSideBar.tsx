import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from 'react'
import ChatModel from '../../modules/chat';
import ChatNavBar from './ChatNavBar'
import ChatSearch from './ChatSearch'
import ChatsList from './ChatsList'


function ChatSideBar({header} : {header: React.ReactNode;}) {
	

  return (
	<div className='chat-side-bar copy-book-background retro-border-box trans-orange-box'>
		{/* <ChatNavBar /> */}
		{/* <ChatSearch /> */}
		{header}
		<ChatsList />
	</div>
  );
}

export default ChatSideBar
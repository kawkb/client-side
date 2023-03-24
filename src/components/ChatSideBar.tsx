import React from 'react'
import ChatNavBar from './ChatNavBar'
import ChatSearch from './ChatSearch'
import ChatsList from './ChatsList'


function ChatSideBar() {
  return (
	<div className='chat-side-bar copy-book-background retro-border-box light-box'>
		<ChatNavBar />
		<ChatSearch />
		<ChatsList />
	</div>
  );
}

export default ChatSideBar
import React from 'react'
import ChatBoxHead from './ChatBoxHead'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

function ChatBox() {
  return (
	<div className='chat-box copy-book-background'>
		<ChatBoxHead />
		<ChatMessages />
		<ChatInput />
	</div>
  )
}

export default ChatBox

import React from 'react'
import squares from '../assets/img/squares.png'

function ChatBoxHead() {
  return (
	<div className='chat-box-header chat-header'>
		<h1>Chat Box Header</h1>
		<img src={squares} className="chat-avatar" alt='avatar' />
	</div>
  )
}

export default ChatBoxHead
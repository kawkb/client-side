import React from 'react'

function ChatInput() {
  return (
	<div className='chat-msg-input'>
		<input type="text" placeholder='write a reply...' />
		<div className='send-message'>
			<button className='send-button'>Send</button>
		</div>
	</div>
  )
}

export default ChatInput
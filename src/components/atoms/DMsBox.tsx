import React from 'react'
import DMsInput from './DMsInput'
import DMsMessages from './DMsMessages'

function DMsBox() {
	return (
		<div className='chat-box copy-book-background retro-border-box trans-orange-box'>
			{/* <ChatBoxHead /> */}
			<DMsMessages />
			<DMsInput />
		</div>
	  )
}

export default DMsBox
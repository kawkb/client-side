import React from 'react'
import ChatSearch from './atoms/ChatSearch'
import ChatsList from './atoms/ChatsList'
import ChatBox from './atoms/ChatBox'
import DMsList from './atoms/DMsList'
import DMsBox from './atoms/DMsBox'

function DMsDisplay() {
  return (
		<div className='chat-container'>
			<div className='chat-side-bar copy-book-background retro-border-box trans-orange-box'>
				<ChatSearch/>
				<DMsList />
			</div>
			<DMsBox />
		</div>
  )
}

export default DMsDisplay
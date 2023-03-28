import React from 'react'
import ChatSearch from './ChatSearch'
import ClassButton from '../ClassButton'

function ChatSearchPlus() {

	const handlePlusNewChat = () => {
		console.log("Create New Chat!");
	} 

  return (
	<div className='chat-search-plus'>
		<input type="text" placeholder="Search" />
		<ClassButton name="+" classes="chat-plus-button" onClick={handlePlusNewChat}/>
	</div>
  )
}

export default ChatSearchPlus
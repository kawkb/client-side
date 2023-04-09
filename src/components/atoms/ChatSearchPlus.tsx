import React from 'react'
import { useState } from 'react'
import ChatSearch from './ChatSearch'
import ClassButton from '../ClassButton'
import Popup from '../Popup'
import BlurredBackground from '../BlurredBackground'
import CreateChat from '../CreateChat'


function ChatSearchPlus() {

	const [showOptions, setShowOptions] = useState(false);

	const handlePlusNewChat = () => {
		setShowOptions(true);
	}

	const handleClosePopup = () => {
		setShowOptions(false);
	}

  return (
	<div className='chat-search-plus'>
		<input className="chat-search-plus-input" type="text" placeholder="Search" />
		<ClassButton name="+" classes="chat-plus-button" onClick={handlePlusNewChat}/>
		{/* {showOptions && <BlurredBackground />} */}
		{showOptions && <Popup onClose={handleClosePopup} content={<CreateChat onClose={handleClosePopup}/>} />}
	</div>
  )
}

export default ChatSearchPlus
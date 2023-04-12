import React from 'react'
import ImgButton from '../ImgButton'
import le_chat from './../../assets/svg/le_chat.svg'

function DMsInput() {
	const handleSend = () => {
		console.log("Send message!");
	}

  return (
	<div className='chat-msg-input'>
		<input type="text" placeholder='write a reply...' />
		<div className='send-message'>
			{/* <button className='send-button'>Send</button> */}
			<ImgButton classes="send-button backgroundless-image-button" src={le_chat} alt={"Send message button"} onClick={handleSend} />
		</div>
	</div>
  )
}

export default DMsInput
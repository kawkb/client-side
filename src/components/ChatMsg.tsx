import React from 'react'
import smiley from '../assets/img/smiley.png'

function ChatMsg() {
  return (
	<div className='chat-msg owner'>
		<div className='chat-msg-info'>
			<img src={smiley} alt=''/>
			{/* <span>just now</span> */}
		</div>
		<div className='chat-msg-content'>
			<p>Hello Chat!</p>
		</div>
	</div>
  )
}

export default ChatMsg
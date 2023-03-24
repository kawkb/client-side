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
			<p>
Soju special stater kit ✔ already won the game ✔ This lobby’s playing for second ✔ This is my last loss ✔ I win out from here ✔ My board is too lit ✔ HP is fake ✔ I’m about to spike hard ✔ That’s a fake loss ✔ 20hp? That’s 3 lives ✔ This game is over ✔ We win out ✔ We're actually scaling ✔ last loss ✔ it's a fast 9 ✔ going eif</p>
		</div>
	</div>
  )
}

export default ChatMsg
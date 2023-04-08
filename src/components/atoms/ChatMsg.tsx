import React from 'react'
import smiley from '../../assets/img/smiley.png'
import smily3 from '../../assets/svg/smily3.svg'

interface ChatMsgProps {
	content: string;
	owner: boolean;
}

function ChatMsg({content, owner} : ChatMsgProps) {
	console.log(owner);
  return (
	<div className={"chat-msg " + (owner? "owner" : "")}>
		<div className='chat-msg-info'>
			<img src={smily3} alt=''/>
			{/* <span>just now</span> */}
		</div>
		{/* <div className='chat-msg-content'> */}
		<div className={"message-blurb-container " + (owner? "blurb-container-owner" : "")}>
			<p className={"message-blurb " + (owner? "blurb-owner" : "")}>{content}</p>
			{/* <p className='message-blurb'>
Soju special stater kit ✔ already won the game ✔ This lobby’s playing for second ✔ This is my last loss ✔ I win out from here ✔ My board is too lit ✔ HP is fake ✔ I’m about to spike hard ✔ That’s a fake loss ✔ 20hp? That’s 3 lives ✔ This game is over ✔ We win out ✔ We're actually scaling ✔ last loss ✔ it's a fast 9 ✔ going eif</p> */}
		</div>
	</div>
  )
}

export default ChatMsg
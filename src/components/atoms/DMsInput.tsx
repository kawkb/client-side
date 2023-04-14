import { useState } from 'react';
import ImgButton from '../ImgButton';
import le_chat from './../../assets/svg/le_chat.svg';

function DMsInput() {

	const [message, setMessage] = useState<string>("");
	
	const handleSend = () => {
		if (message !== "") {
			// post message
			console.log("Send :" + message);
			setMessage("");
		}
	}

  return (
	<div className='chat-msg-input'>
		<input type="text" placeholder='write a something...' 
		onChange={(e) => setMessage(e.target.value)}
		value={message}/>
		<div className='send-message'>
			<ImgButton classes="send-button backgroundless-image-button" src={le_chat} alt={"Send message button"} onClick={handleSend} />
		</div>
	</div>
  )
}

export default DMsInput
import React from 'react'
import TabBox from './TabBox';
import ChatBox from './ChatBox';
import ImgButton from './ImgButton';
import ChatMsg from './ChatMsg';
import ChatDisplay from './ChatDisplay';
import le_chat from './../assets/svg/le_chat.svg'
import les_chats from './../assets/svg/les_chats.svg'

function ChatComp() {
	const options = [
		{ name: le_chat, content: <ChatDisplay />},
		{ name: les_chats, content: <ChatDisplay />},
	];
	const color:string = "orange";
	return (
	<div className='pattern-background orange-pattern'>
		<TabBox options={options} tabcolor={color} imgbtn={true}/>		
	</div>
	);
}

export default ChatComp
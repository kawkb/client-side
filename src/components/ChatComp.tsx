import React from 'react'
import TabBox from './TabBox';
import ChatBox from './atoms/ChatBox';
import ImgButton from './ImgButton';
import ChatDisplay from './ChatDisplay';
import ChatContainer from './ChatContainer';
import le_chat from './../assets/svg/le_chat.svg'
import les_chats from './../assets/svg/les_chats.svg'
import ChatSearch from './atoms/ChatSearch';
import ChatSearchPlus from './atoms/ChatSearchPlus';

function ChatComp() {
	const options = [
		{ name: le_chat, content: <ChatDisplay sideheader={<ChatSearch />} />},
		{ name: les_chats, content: <ChatDisplay sideheader={<ChatSearchPlus />} />},
	];
	const color:string = "orange";

	return (
	<div className='chat-tab-container pattern-background orange-pattern'>
		<TabBox options={options} tabcolor={color} imgbtn={true}/>		
	</div>
	);
}

export default ChatComp
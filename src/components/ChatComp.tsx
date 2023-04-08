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
import squares from '../assets/img/squares.png'
import useChatList from '../hooks/useChatList';
import Channel from '../modules/channel';
import DMs from '../modules/dms';

function ChatComp() {
	const options = [
		{ name: le_chat, content: <ChatDisplay sideheader={<ChatSearch />} />},
		{ name: les_chats, content: <ChatDisplay sideheader={<ChatSearchPlus />} />},
	];
	const color:string = "orange";

	const activeItem = useChatList(state => state.activeItem);

	return (
	<div className='chat-tab-container pattern-background orange-pattern'>
		<TabBox options={options} tabcolor={color} imgbtn={true} title={activeItem instanceof Channel ? activeItem.name ?? "Welcome to chat !" : activeItem?.user.name ?? "Welcome to chat !"} avatar={activeItem instanceof Channel ? activeItem?.avatar ?? squares: activeItem?.user.avatar ?? squares}/>		
	</div>
	);
}

export default ChatComp
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
import DMsDisplay from './DMsDisplay';
import useChatParams from '../hooks/useChatParams';
import ChatTabBox from './ChatTabBox';

function ChatComp() {
	const options = [
		{ name: le_chat, content: <DMsDisplay />},
		{ name: les_chats, content: <ChatDisplay />},
	];
	const color:string = "orange";

	const activeChannel = useChatParams(state => state.activeChannel);
	const activeDMs = useChatParams(state => state.activeDMs);
	const activeItem = useChatParams(state => state.activeItem);

	activeChannel && console.log(`${activeChannel.id}`);
	activeDMs && console.log(`${activeDMs.id}`);
	activeItem && console.log(`${activeItem.id}`);

	return (
	<div className='chat-tab-container pattern-background orange-pattern'>
		{/* <TabBox options={options} tabcolor={color} imgbtn={true} title={activeItem instanceof Channel ? activeItem.name as string ?? "Welcome to chat !" : activeItem?.user.name as string ?? "Welcome to chat !"} avatar={activeItem instanceof Channel ? activeItem?.avatar ?? squares: activeItem?.user.avatar ?? squares}/>		 */}
		<ChatTabBox />
	</div>
	);
}

export default ChatComp
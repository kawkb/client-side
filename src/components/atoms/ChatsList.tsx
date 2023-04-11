import React from 'react'
import ChatModel from '../../modules/chat';
import { useState } from 'react';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import useChatList from '../../hooks/useChatList';
import Channel from '../../modules/channel';
import User from '../../modules/user';
import DMs from '../../modules/dms';
import { createRandomChannel } from '../../hooks/useChatList';
import { createRandonChannelList } from '../../hooks/useChatList';
import ThreeDotMenu from './ThreeDotMenu';
import useChatParams from '../../hooks/useChatParams';
import Popup from '../Popup';
import ChannelSettings from './ChannelSettings';

// type ChatListProps = {
// 	  chats: ChatModel[];
// }

function ChatsList() {

	const channelList = useChatParams(state => state.channelList);
	const setChannelList = useChatParams(state => state.setChannelList);
	const activeChannel = useChatParams(state => state.activeChannel);
	const activeChannelOptions = useChatParams(state => state.activeChannelOptions);
	const setActiveChannel = useChatParams(state => state.setActiveChannel);
	const setActiveChannelOptions = useChatParams(state => state.setActiveChannelOptions);
	const removeChannel = useChatParams(state => state.removeChannel);

	const [showSettings, setShowSettings] = useState(false);

	useEffect(() => { setChannelList(createRandonChannelList()) }, []);

	const handleMenuClick = (menuItem: string) => {
		console.log(menuItem);
	}

	const handleButtonClick = (itemId: string, itemName: string) => {
		console.log(`item id: ${itemId} ${itemName}`);
		setActiveChannelOptions(itemId);
	}

	const handleCloseOptions = () => {
		setActiveChannelOptions('');
	}

	const handleLeaveChannel = () => {
		console.log('leave channel');
		if (activeChannelOptions)
		{
			removeChannel(activeChannelOptions.id);
			setActiveChannelOptions('');
		}
	}

	const handleShowSettings = () => {
		setShowSettings(true);
	}

	const handleCloseSettingsPopup	= () => {
		setShowSettings(false);
		setActiveChannelOptions('');
	}


  return (
	<div className='chat-list scrollable'>
		{
			channelList.map((item, index) => {
				const itemName = item.name;
				return (
					<div key={item.id}>
					{ (activeChannelOptions === null || (activeChannelOptions?.id !== item.id)) &&
					<div className='chat-list-item'>
						<span className='chat-list-item-name' onClick={
						() => {setActiveChannel(item.id)}}> {itemName} </span>
						<button className="three-dot-menu-button" onClick={() => handleButtonClick(item.id, itemName)}>
							<div className="three-dot-menu-dot" ></div>
							<div className="three-dot-menu-dot" ></div>
							<div className="three-dot-menu-dot" ></div>
						</button>
					</div>
					}
						{ activeChannelOptions && (activeChannelOptions.id === item.id) && 
						<div className='chat-list-item-options'>
							<span className='chat-list-option' onClick={handleShowSettings}>Settings</span>
							{showSettings && <Popup onClose={handleCloseSettingsPopup} content={<ChannelSettings onClose={handleCloseSettingsPopup}/>} />}
							<span className='chat-list-option chat-list-option-last' onClick={handleLeaveChannel}>Leave</span>
							<button className='chat-list-options-close' onClick={handleCloseOptions}>x</button>
						</div> 
						}
					</div>
				)
			})
		}
	</div>
  )
}

export default ChatsList
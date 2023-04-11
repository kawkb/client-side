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
import { createRandomDM } from '../../hooks/useChatList';
import { createRandomDMList } from '../../hooks/useChatList';


// type ChatListProps = {
// 	  chats: ChatModel[];
// }

function DMsList() {

	const dmsList = useChatParams(state => state.dmsList);
	const setDMsList = useChatParams(state => state.setDMsList);
	const activeDMs = useChatParams(state => state.activeDMs);
	const activeDMsOptions = useChatParams(state => state.activeDMsOptions);
	const setActiveDMs = useChatParams(state => state.setActiveDMs);
	const setActiveDMsOptions = useChatParams(state => state.setActiveDMsOptions);



	useEffect(() => { setDMsList(createRandomDMList()) }, []);

	const handleMenuClick = (menuItem: string) => {
		console.log(menuItem);
	}

	const handleButtonClick = (itemId: string, itemName: string) => {
		console.log(`item id: ${itemId} ${itemName}`);
		setActiveDMsOptions(itemId);
	}

	const handleCloseOptions = () => {
		setActiveDMsOptions('');
	}

	const handleLeaveDM = () => {
		console.log('leave channel');
		if (activeDMsOptions)
		{
			setActiveDMsOptions('');
		}
	}

  return (
	<div className='chat-list scrollable'>
		{
			dmsList.map((item, index) => {
				const itemName = item.user.name;
				return (
					<div key={item.id}>
					{ (activeDMsOptions === null || (activeDMsOptions?.id !== item.id)) &&
					<div className='chat-list-item'>
						<span className='chat-list-item-name' onClick={
						() => {setActiveDMs(item.id)}}> {itemName} </span>
						<button className="three-dot-menu-button" onClick={() => handleButtonClick(item.id, itemName)}>
							<div className="three-dot-menu-dot" ></div>
							<div className="three-dot-menu-dot" ></div>
							<div className="three-dot-menu-dot" ></div>
						</button>
					</div>
					}
						{ activeDMsOptions && (activeDMsOptions.id === item.id) && 
						<div className='chat-list-item-options'>
							<span className='chat-list-option'>Settings</span>
							<span className='chat-list-option chat-list-option-last' onClick={handleLeaveDM}>Leave</span>
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

export default DMsList
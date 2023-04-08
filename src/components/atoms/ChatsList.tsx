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

// type ChatListProps = {
// 	  chats: ChatModel[];
// }

function ChatsList() {

	const items = useChatList(state => state.items);
	const setActiveItem = useChatList(state => state.setActiveItem);
	const setItems = useChatList(state => state.setItems);


	useEffect(() => { setItems(createRandonChannelList()) }, []);

  return (
	<div className='chat-list scrollable'>
		{
			items.map((item, index) => {
				const itemName = item instanceof Channel ? item.name : item.user.name;
				return (
					<div className='chat-list-item' key={item.id} onClick={
						() => {setActiveItem(item.id)}}>
						<span> {itemName} </span>
					</div>
				)
			})

		}
	</div>
  )
}

export default ChatsList
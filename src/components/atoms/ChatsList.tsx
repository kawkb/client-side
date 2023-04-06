import React from 'react'
import ChatModel from '../../modules/chat';
import { useState } from 'react';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import useChatList from '../../hooks/useChatList';
import Channel from '../../modules/channel';
import User from '../../modules/user';
import DMs from '../../modules/dms';


// type ChatListProps = {
// 	  chats: ChatModel[];
// }

function ChatsList() {

	// const [chats, setChats] = useState<ChatModel[]>([]);
	// useEffect(() => {
	//   setChats(
	// 	  [new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),
	// 	  new ChatModel(faker.internet.email(), faker.name.firstName()),]
	//   );
	// }, []);

	const items = useChatList(state => state.items);
	// const activeItem = useChatList(state => state.activeItem);
	const setActiveItem = useChatList(state => state.setActiveItem);

  return (
	<div className='chat-list scrollable'>
		{
			// chats.map((chat, index) => {
			// 	return (
			// 		<div className='chat-list-item' key={index} onClick={
			// 			() => {
			// 				//TODO : Update value of selected chat
			// 			}
			// 		}>
			// 			<span>{chat.name}</span>
			// 		</div>
			// 	)
			// })


			items.map((item, index) => {
				return (
					<div className='chat-list-item' key={item.id} onClick={
						() => {setActiveItem(item.id)}}>
						<span>
							 	if (item instanceof Channel)
									item.name;
								else if (item instanceof DMs)
									item.user.name;
						</span>
					</div>
				)
			})

		}
		{/* <div className='chat-list-item'>
			<span>Radi</span>
		</div>
		<div className='chat-list-item'>
			<span>Ziyad</span>
		</div>
		<div className='chat-list-item'>
			<span>Sigma</span>
		</div>
		<div className='chat-list-item'>
			<span>Kawkab</span>
		</div>
		<div className='chat-list-item'>
			<span>Radi</span>
		</div>
		<div className='chat-list-item'>
			<span>Ziyad</span>
		</div>
		<div className='chat-list-item'>
			<span>Sigma</span>
		</div>
		<div className='chat-list-item'>
			<span>Kawkab</span>
		</div>
		<div className='chat-list-item'>
			<span>Radi</span>
		</div>
		<div className='chat-list-item'>
			<span>Ziyad</span>
		</div>
		<div className='chat-list-item'>
			<span>Sigma</span>
		</div> */}
	</div>
  )
}

export default ChatsList
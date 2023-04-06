import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from 'react'
import ChatModel from '../../modules/chat';
import ChatNavBar from './ChatNavBar'
import ChatSearch from './ChatSearch'
import ChatsList from './ChatsList'


function ChatSideBar({header} : {header: React.ReactNode;}) {
	const [chats, setChats] = useState<ChatModel[]>([]);
	useEffect(() => {
	  setChats(
		  [new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),
		  new ChatModel(faker.internet.email(), faker.name.firstName()),]
	  );
	}, []);

  return (
	<div className='chat-side-bar copy-book-background retro-border-box trans-orange-box'>
		{/* <ChatNavBar /> */}
		{/* <ChatSearch /> */}
		{header}
		<ChatsList chats={chats}/>
	</div>
  );
}

export default ChatSideBar
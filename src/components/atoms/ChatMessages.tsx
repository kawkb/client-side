import React, { useEffect, useRef } from 'react'
import ChatMsg from './ChatMsg'
import useCurrentChat from '../../hooks/useCurrentChat'
import useChatList from '../../hooks/useChatList'
import { createRandomMsg } from '../../hooks/useCurrentChat'
import { createRandomMsgList } from '../../hooks/useCurrentChat'
import { createRandomChannel } from '../../hooks/useChatList'
import { createRandonChannelList } from '../../hooks/useChatList'
import { faker } from '@faker-js/faker'
import useChatParams from '../../hooks/useChatParams'
import { act } from '@testing-library/react'


function ChatMessages() {

	const activeChannel = useChatParams(state => state.activeChannel);
	const activeChannelMessages = useChatParams(state => state.activeChannelMessages);
	const setActiveChannelMessages = useChatParams(state => state.setActiveChannelMessages);

	useEffect(() => { setActiveChannelMessages(createRandomMsgList()) }, [activeChannel?.id]);

	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => { scrollToBottom(); }, [activeChannelMessages]);

  return (
	<div className='chat-messages-list scrollable'>
		{
			activeChannelMessages.map((msg, index) => {
				return (
					// should pass weither the message is from the current user or not but just for testing it's a random boolean
					<ChatMsg content={msg.content} owner={msg.sender_id > faker.datatype.uuid()} key={index}/>
				)
			})
		}
		<div ref={messagesEndRef}></div>
	</div>
  )
}

export default ChatMessages
import React, { useEffect } from 'react'
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
	const setChannelMessages = useChatParams(state => state.setChannelMessages);

	useEffect(() => { setChannelMessages(createRandomMsgList()) }, [activeChannel?.id]);

  return (
	<div className='chat-messages-list scrollable'>
		{
			activeChannel?.messages.map((msg, index) => {
				return (
					<ChatMsg content={msg.content} owner={msg.sender_id > faker.datatype.uuid()} key={index}/>
				)
			})

		}
	</div>
  )
}

export default ChatMessages
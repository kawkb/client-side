import React, { useEffect } from 'react'
import ChatMsg from './ChatMsg'
import { faker } from '@faker-js/faker'
import useChatParams from '../../hooks/useChatParams'
import { createRandomDMsMsg, createRandomDMsMsgList } from '../../hooks/useCurrentChat'

function DMsMessages() {

	const activeDMs = useChatParams(state => state.activeDMs);
	const setActiveDMs = useChatParams(state => state.setActiveDMs);
	const setDMsMessages = useChatParams(state => state.setDMsMessages);

	useEffect(() => { setDMsMessages(createRandomDMsMsgList()) }, [activeDMs?.id]);

	return (
		<div className='chat-messages-list scrollable'>
			{
				activeDMs?.messages.map((msg, index) => {
					return (
						<ChatMsg content={msg.content} owner={msg.sender_id > faker.datatype.uuid()} key={index}/>
					)
				})

			}
		</div>
	)
}

export default DMsMessages
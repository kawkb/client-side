import React, { useEffect } from 'react'
import ChatMsg from './ChatMsg'
import { faker } from '@faker-js/faker'
import useChatParams from '../../hooks/useChatParams'
import { createRandomDMsMsg, createRandomDMsMsgList } from '../../hooks/useCurrentChat'
import useDMsParams from '../../hooks/useDMsParams'


function DMsMessages() {

	const activeDMs = useDMsParams(state => state.activeDMs);
	const setActiveDMs = useDMsParams(state => state.setActiveDMs);
	const activeDMsMessages = useDMsParams(state => state.activeDMsMessages);
	const setActiveDMsMessages = useDMsParams(state => state.setActiveDMsMessages);

	useEffect(() => { setActiveDMsMessages(createRandomDMsMsgList()) }, [activeDMs?.id]);

	return (
		<div className='chat-messages-list scrollable'>
			{
				activeDMsMessages.map((msg, index) => {
					return (
						<ChatMsg content={msg.content} owner={msg.sender_id > faker.datatype.uuid()} key={index}/>
					)
				})
			}
		</div>
	)
}

export default DMsMessages
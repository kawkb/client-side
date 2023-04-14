import { useEffect, useRef } from 'react'
import ChatMsg from './ChatMsg'
import { faker } from '@faker-js/faker'
import { createRandomDMsMsgList } from '../../hooks/useCurrentChat'
import useDMsParams from '../../hooks/useDMsParams'


function DMsMessages() {

	const activeDMs = useDMsParams(state => state.activeDMs);
	const setActiveDMs = useDMsParams(state => state.setActiveDMs);
	const activeDMsMessages = useDMsParams(state => state.activeDMsMessages);
	const setActiveDMsMessages = useDMsParams(state => state.setActiveDMsMessages);

	useEffect(() => { setActiveDMsMessages(createRandomDMsMsgList()) }, [activeDMs?.id]);

	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => { scrollToBottom(); }, [activeDMsMessages]);
	
	return (
		<div className='chat-messages-list scrollable'>
			{
				activeDMsMessages.map((msg, index) => {
					return (
						<ChatMsg author={msg.author} content={msg.content} owner={msg.author_id > faker.datatype.uuid()} key={index}/>
					)
				})
			}
			<div ref={messagesEndRef}></div>
		</div>
	)
}

export default DMsMessages
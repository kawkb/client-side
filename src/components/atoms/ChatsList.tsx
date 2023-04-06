import React from 'react'
import ChatModel from '../../modules/chat';

type ChatListProps = {
	  chats: ChatModel[];
}

function ChatsList({chats} : ChatListProps) {
  return (
	<div className='chat-list scrollable'>
		{
			chats.map((chat, index) => {
				return (
					<div className='chat-list-item' key={index} onClick={
						() => {
							//TODO : Update value of selected chat
						}
					}>
						<span>{chat.name}</span>
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
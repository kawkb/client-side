import React from 'react'
import { useState } from 'react';
import ClassButton from './ClassButton'
import useChatList from '../hooks/useChatList';

function CreateChat({onClose}: {onClose: () => void}) {

	const [publicBtnState, setPublicBtnState] = useState(false);
	const [privateBtnState, setPrivateBtnState] = useState(false);
	const [protectedBtnState, setProtectedBtnState] = useState(false);
	const [channelName, setChannelName] = useState('');
	const [password, setPassword] = useState('');

	const handleCreatePublic = () => { const newBtnState = !publicBtnState; setPublicBtnState(newBtnState); if (newBtnState) {setPrivateBtnState(false); setProtectedBtnState(false);}}
	const handleCreatePrivate = () => { const newBtnState = !privateBtnState; setPrivateBtnState(newBtnState); if (newBtnState) {setPublicBtnState(false); setProtectedBtnState(false);}}
	const handleCreateProtected = () => { const newBtnState = !protectedBtnState; setProtectedBtnState(newBtnState); if (newBtnState) {setPrivateBtnState(false); setPublicBtnState(false);}}

	
	const publicClasses = "new-room-option-btn new-room-option-first-btn " + (publicBtnState? "green-bg" : "unclicked-new-room-option coral-bg"); 
	const privateClasses = "new-room-option-btn " + (privateBtnState? "green-bg" : "unclicked-new-room-option coral-bg"); 
	const protectedClasses = "new-room-option-btn " + (protectedBtnState? "green-bg" : "unclicked-new-room-option coral-bg"); 
	
	// const add = useChatList(state => state.add);
	const handleCreateNewRoom = () => {
		// update channel list with new room
		console.log('Create New Room: ' + channelName);
		if (protectedBtnState) {
			console.log('Protected Room Password: ' + password);
		}
		onClose();
	}

  return (
	<div className='create-room-popup copy-book-background retro-border-box trans-orange-box'>
		<h1 className='create-room-title'>Add New Chat Room!</h1>
		<input className="popup-input" type="text" placeholder='Room Name:' value={channelName} onChange={(e) => setChannelName(e.target.value)}/>
		<div className='create-chat-options'>
			<ClassButton name="Public" classes={publicClasses} onClick={handleCreatePublic}/>
			<ClassButton name="Private" classes={privateClasses} onClick={handleCreatePrivate}/>
			<ClassButton name="Protected" classes={protectedClasses} onClick={handleCreateProtected}/>
		</div>
		{ protectedBtnState && <input className="popup-input" type="password" placeholder='Password:' value={password} onChange={(e) => setPassword(e.target.value)}/> }
		<div className='create-button-container'>
			<ClassButton name="Create" classes="retro-button orange-header confirm-new-chat-btn" onClick={handleCreateNewRoom}/>
			<ClassButton name="Cancel" classes="retro-button orange-header confirm-new-chat-btn" onClick={onClose}/>
		</div>
	</div>
  )
}

export default CreateChat
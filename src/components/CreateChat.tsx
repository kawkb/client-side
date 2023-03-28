import React from 'react'
import ClassButton from './ClassButton'

function CreateChat({onClose}: {onClose: () => void}) {

	const handleCreatePublic = () => {}
	const handleCreatePrivate = () => {}
	const handleCreateProtected = () => {}

	const handleCreateNewRoom = () => {}

  return (
	<div className='create-room-popup copy-book-background retro-border-box trans-orange-box'>
		<h1 className='create-room-title'>Add New Chat Room!</h1>
		<input className="popup-input" type="text" placeholder='Room Name:'/>
		<div className='create-chat-options'>
			<ClassButton name="Public" classes="new-room-option-btn new-room-option-first-btn" onClick={handleCreatePublic}/>
			<ClassButton name="Private" classes="new-room-option-btn" onClick={handleCreatePrivate}/>
			<ClassButton name="Protected" classes="new-room-option-btn" onClick={handleCreateProtected}/>
		</div>
		<input className="popup-input" type="password" placeholder='Password:'/>
		<div className='create-button-container'>
			<ClassButton name="Create" classes="retro-button orange-header confirm-new-chat-btn" onClick={handleCreateNewRoom}/>
			<ClassButton name="Cancel" classes="retro-button orange-header confirm-new-chat-btn" onClick={onClose}/>
		</div>
	</div>
  )
}

export default CreateChat
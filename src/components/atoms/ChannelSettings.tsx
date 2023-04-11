import React from 'react'
import ClassButton from '../ClassButton'
import useChatParams from '../../hooks/useChatParams';

function ChannelSettings({onClose}: {onClose: () => void}) {
	
	const activeChannelOptions = useChatParams(state => state.activeChannelOptions);
	const setActiveChannelOptions = useChatParams(state => state.setActiveChannelOptions);

	const handleSaveChanges = () => {
		console.log('Save Changes');
		onClose();
		setActiveChannelOptions('');
	}
	return (
	<div className='create-room-popup copy-book-background retro-border-box trans-orange-box'>
		ChannelSettings
		<div className='create-button-container'>
			<ClassButton name="Save" classes="retro-button orange-header confirm-new-chat-btn" onClick={handleSaveChanges}/>
			<ClassButton name="Cancel" classes="retro-button orange-header confirm-new-chat-btn" onClick={onClose}/>
		</div>
	</div>
  )
}

export default ChannelSettings
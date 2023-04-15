import React from 'react';
import ClassButton from '../ClassButton';
import useChatParams from '../../hooks/useChatParams';
import { useRef } from 'react';
import imgupload from '../../assets/svg/imgupload.svg';


function ChannelSettings({onClose}: {onClose: () => void}) {
	
	const activeChannelOptions = useChatParams(state => state.activeChannelOptions);
	const setActiveChannelOptions = useChatParams(state => state.setActiveChannelOptions);
	const setActiveChannelOptionsName = useChatParams(state => state.setActiveChannelOptionsName);
	const [tmpChannelName, setTmpChannelName] = React.useState<string>(activeChannelOptions?.name ?? "");

	if (activeChannelOptions === null)
			console.log('activeChannelOptions is null first time');
	const fileInputRef = useRef<HTMLInputElement>(null);
	
	
	const handleChannelNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTmpChannelName(event.target.value);
    };

	const handleSaveChanges = () => { // function to save changes and update channel name and avatar
		console.log('Save Changes');
		if (activeChannelOptions)
			setActiveChannelOptionsName(activeChannelOptions?.id, tmpChannelName);
		onClose();
	}

	const handleCLickImageButton = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
	<div className='create-room-popup copy-book-background retro-border-box trans-orange-box'>
		{/* ChannelSettings */}
		<div className='channel-settings-container'>
			<h1 className='channel-settings-title'>Channel Settings</h1>
			<div className='channel-name-img-container'>
				<input className="channel-new-name-input" type="text" placeholder='New Channel Name' value={tmpChannelName} onChange={handleChannelNameInput}/>
			</div>
			<div className='channel-settings-btns-container'>
				<ClassButton name="Save" classes="orange-header confirm-channel-settings-btn" onClick={handleSaveChanges}/>
				<ClassButton name="Cancel" classes="orange-header confirm-channel-settings-btn" onClick={onClose}/>
			</div>
		</div>
	</div>
  )
}

export default ChannelSettings
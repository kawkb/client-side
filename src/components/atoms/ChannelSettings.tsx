import React from 'react'
import ClassButton from '../ClassButton'
import useChatParams from '../../hooks/useChatParams';
import { useRef } from 'react';
import imgupload from '../../assets/svg/imgupload.svg';


function ChannelSettings({onClose}: {onClose: () => void}) {
	
	const activeChannelOptions = useChatParams(state => state.activeChannelOptions);
	const setActiveChannelOptions = useChatParams(state => state.setActiveChannelOptions);
	const setActiveChannelOptionsName = useChatParams(state => state.setActiveChannelOptionsName);
	const setActiveChannelOptionsAvatar = useChatParams(state => state.setActiveChannelOptionsAvatar);
	const [tmpChannelName, setTmpChannelName] = React.useState<string>(activeChannelOptions?.name ?? "");
	const [tmpChannelAvatar, setTmpChannelAvatar] = React.useState<string>(activeChannelOptions?.avatar ?? "");
	if (activeChannelOptions === null)
			console.log('activeChannelOptions is null first time');
	const fileInputRef = useRef<HTMLInputElement>(null);
	
	const handleUploadChannelAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			setTmpChannelAvatar(file.name);
			console.log(file);
		}
	};
	
	const handleChannelNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTmpChannelName(event.target.value);
    };

	const handleSaveChanges = () => { // function to save changes and update channel name and avatar
		console.log('Save Changes');
		if (activeChannelOptions)
		{
			console.log(`${activeChannelOptions?.id} ${activeChannelOptions?.name} ${tmpChannelName} ${tmpChannelAvatar}`)
			setActiveChannelOptionsName(activeChannelOptions?.id, tmpChannelName);
			setActiveChannelOptionsAvatar(activeChannelOptions?.id, tmpChannelAvatar);
		}
		// setActiveChannelOptions('');
		if (activeChannelOptions === null)
			console.log('activeChannelOptions is null');
		onClose();
		console.log(`after close ${activeChannelOptions?.id} ${activeChannelOptions?.name} ${tmpChannelName} ${tmpChannelAvatar}`)
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
				<img className="channel-img-upload-btn" src={imgupload} alt="Upload channel avatar" onClick={handleCLickImageButton}/>
				<input type="file" accept="image/*" ref={fileInputRef} style={{display: 'none'}} onChange={handleUploadChannelAvatar} />
				<input className="channel-new-name-input" type="text" placeholder='New Channel Name' value={tmpChannelName} onChange={handleChannelNameInput}/>
			</div>
			<div className='channel-settings-btns-container'>
				<ClassButton name="Save" classes="retro-button orange-header confirm-channel-settings-btn" onClick={handleSaveChanges}/>
				<ClassButton name="Cancel" classes="retro-button orange-header confirm-channel-settings-btn" onClick={onClose}/>
			</div>
		</div>
	</div>
  )
}

export default ChannelSettings
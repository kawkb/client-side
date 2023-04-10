import React from 'react'
import QRCode from 'qrcode.react';
import ClassButton from './ClassButton';
import { useEnable2fa } from '../hooks/useEnable2fa';


interface Enable2faProps {
	onClose: () => void;
	onSubmit: () => void;
}

function Enable2fa({onClose, onSubmit} : Enable2faProps) {

	const url = 'https://www.google.com';

	const enable2fa = useEnable2fa((state) => state.enable2fa);
	const setEnable2fa = useEnable2fa((state) => state.setEnable2fa);

	const handleEnable2fa = () => {
		console.log('enable 2fa');
	}

  return (
	<div className='create-room-popup copy-book-background retro-border-box trans-pink-box'>
		<h1>Scan the QR Code</h1>
		<QRCode value={url} />
		<input className="popup-input" type="text" placeholder='999999'/>
		<div className='create-button-container'>
			<ClassButton name="Enable" classes="retro-button pink-header confirm-new-chat-btn" onClick={onSubmit}/>
			<ClassButton name="Cancel" classes="retro-button pink-header confirm-new-chat-btn" onClick={onClose}/>
		</div>
	</div>
  )
}

export default Enable2fa
import React, { useState } from 'react'
import enable2fa from './../assets/svg/enable2fa.svg'
import nickname from './../assets/svg/nickname.svg'
import editpic from './../assets/svg/editpic.svg'
import heart from './../assets/svg/heart.svg'
import greenflower from './../assets/svg/greenflower.svg'
import redflower from './../assets/svg/redflower.svg'
import ImgUpload from './ImgUpload'
import ImgButton from './ImgButton'
import ToggleButton from './ToggleButton'
import CustomToggleButton from './CustomToggle'

function Settings() {
	// const [enable2FA, setEnable2FA] = useState(false);
	
	const handleNewNickname = () => {
		console.log('Change Nickname!');
	};

	// const handleToggle = (isToggled: boolean) => {
	// 	setEnable2FA(isToggled);
	// };

	const handleToggle = (isToggled: boolean) => {
		console.log(`Toggle button is ${isToggled ? 'on' : 'off'}`);
	};

	return (
		<div className='settings-container'>
			<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
				<img className="svg-text" src={editpic} alt="" />
				<ImgUpload />
			</div>
			<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
				<img className="svg-text svg-text-margin" src={nickname} alt="" />
				<div className='nickname-input'>
					<input type="text" placeholder='New Nickname' />
					<ImgButton classes="backgroundless-image-button" src={heart} alt="confirm" onClick={handleNewNickname} />
				</div>
			</div>
			<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
				<img className="svg-text" src={enable2fa} alt="" />
				<div className='toggle-container'>
					<CustomToggleButton 
						onToggle={handleToggle} 
						untoggledImage={redflower}
						toggledImage={greenflower}
					/>
				</div>
			</div>
		</div>
	);
}

export default Settings
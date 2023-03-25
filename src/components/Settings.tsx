import React from 'react'
import enable2fa from './../assets/svg/enable2fa.svg'
import nickname from './../assets/svg/nickname.svg'
import editpic from './../assets/svg/editpic.svg'
import heart from './../assets/svg/heart.svg'
import ImgUpload from './ImgUpload'
import ImgButton from './ImgButton'

function Settings() {
	const handleNewNickname = () => {
		console.log('Change Nickname!');
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
				<ImgButton src={heart} alt="confirm" onClick={handleNewNickname} />
			</div>
		</div>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img className="svg-text" src={enable2fa} alt="" />
		</div>
	</div>
  );
}

export default Settings
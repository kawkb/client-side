import React from 'react'
import enable2fa from './../assets/svg/enable2fa.svg'
import nickname from './../assets/svg/nickname.svg'
import editpic from './../assets/svg/editpic.svg'

function Settings() {
  return (
	<div className='settings-container'>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img src={editpic} alt="" />
		</div>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img src={nickname} alt="" />
		</div>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img src={enable2fa} alt="" />
		</div>
	</div>
  );
}

export default Settings
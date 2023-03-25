import React from 'react'
import enable2fa from './../assets/svg/enable2fa.svg'
import nickname from './../assets/svg/nickname.svg'
import editpic from './../assets/svg/editpic.svg'

function Settings() {
  return (
	<div className='settings-container'>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img className="svg-text" src={editpic} alt="" />
		</div>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img className="svg-text" src={nickname} alt="" />
		</div>
		<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
			<img className="svg-text" src={enable2fa} alt="" />
		</div>
	</div>
  );
}

export default Settings
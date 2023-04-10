import React from 'react'
import frisky from '../assets/svg/frisky.svg'
import fast from '../assets/svg/fast.svg'
import fierce from '../assets/svg/fierce.svg'

function HomeComp() {
  return (
	<div className='home-page pattern-background blue-pattern'>
		<div className='home-container'>
			<div className='game-modes-container'>
				<div className='game-play-mode frisky-mode retro-border-box'>
					<img src={frisky} alt="" />
					<h1>Frisky?</h1>
				</div>
				<div className='game-play-mode fast-mode retro-border-box'>
					<img src={fast} alt="" />
					<h1>Fast?</h1>
				</div>
				<div className='game-play-mode fierce-mode retro-border-box'>
					<img src={fierce} alt="" />
					<h1>Fierce?</h1>
				</div>
			</div>
			<div className='game-info-container'>
				<div className='game-info copy-book-background'></div>
				<div className='game-info copy-book-background'></div>
				<div className='game-info copy-book-background'></div>
			</div>
		</div>
	</div>
  )
}

export default HomeComp
import React from 'react'
import happyflower from './../assets/svg/happyflower.svg'
import sadflower from './../assets/svg/sadflower.svg'
import whiteflower from './../assets/svg/whiteflower.svg'

function PlayerStats() {
  return (
	<div className='player-stats-box retro-border-box copy-book-background trans-pink-box'>
		<h1>Statistics:</h1>
		<div className='player-stats-container'>
			<div className='flower-stats-container'>
				<img src={whiteflower} alt="" />
				<span className='flower-number-span'>10%</span>
				<span className='flower-text-span'>draws</span>
			</div>
			<div className='flower-stats-container'>
				<img src={happyflower} alt="" />
				<span className='flower-number-span'>50%</span>
				<span className='flower-text-span'>wins</span>
			</div>
			<div className='flower-stats-container'>
				<img src={sadflower} alt="" />
				<span className='flower-number-span'>40%</span>
				<span className='flower-text-span'>losses</span>
			</div>
		</div>
		<div className='xp-level-bar-container'>
			<span>LEVEL 1 - 300XP</span>
			<div className='xp-level-bar'>
				<div className='xp-level-bar-fill'></div>
			</div>
		</div>
	</div>
  )
}

export default PlayerStats
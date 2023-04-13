import React from 'react'
import ImgButton from '../ImgButton'
import ban from '../../assets/img/thinban.png'
import mute from '../../assets/img/mute-user.png'
import kick from '../../assets/img/taekwondo-kick.png'
import timeout from '../../assets/img/clock.png'
import ClassButton from '../ClassButton'
import squares from '../../assets/img/squares.png'
import { Tooltip } from 'react-tooltip'

function ChannelMembers({onClose}: {onClose: () => void}) {


	const [showAdminOptions, setShowAdminOptions] = React.useState<boolean>(false);

	const handleBanMember = () => {
		console.log('Ban Member');
	}

	const handleKickMember = () => {
		console.log('Kick Member');
	}

	const handleTimeoutMember = () => {
		console.log('Timeout Member');
	}

	const handleMuteMember = () => {
		console.log('Mute Member');
	}

	return (
		<div className='create-room-popup copy-book-background retro-border-box trans-orange-box'>
			{/* ChannelSettings */}
			<div className='channel-members-container'>
				<h1 className='channel-members-title'>Channel Members</h1>
				<div className='channel-members-list scrollable'>
					
					<div className='channel-member-box'>
						<div className='channel-member-info-container'>
							<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
							<span className='channel-member-name'>Sigma Houssna</span>
						</div>
						<div className='channel-member-btns-container'>
							{ showAdminOptions && <ImgButton src={kick} alt="kick user" classes="channel-member-btn" onClick={handleKickMember}/> }
							{ showAdminOptions && <ImgButton src={ban} alt="ban user" classes="channel-member-btn" onClick={handleBanMember}/> }
							{ showAdminOptions && <ImgButton src={timeout} alt="give user a timeout" classes="channel-member-btn" onClick={handleTimeoutMember}/> }
							<ImgButton src={mute} alt="mute user" classes="channel-member-btn" onClick={handleMuteMember}/>
						</div>
					</div>

					<div className='channel-member-box'>
						<div className='channel-member-info-container'>
							<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
							<span className='channel-member-name'>Sigma Houssna</span>
						</div>
						<div className='channel-member-btns-container'>
							<ImgButton src={kick} alt="kick user" classes="channel-member-btn" onClick={handleKickMember}/>
							<ImgButton src={ban} alt="ban user" classes="channel-member-btn" onClick={handleBanMember}/>
							<ImgButton src={timeout} alt="give user a timeout" classes="channel-member-btn" onClick={handleTimeoutMember}/>
							<ImgButton src={mute} alt="mute user" classes="channel-member-btn" onClick={handleMuteMember}/>
						</div>
					</div>

					<div className='channel-member-box'>
						<div className='channel-member-info-container'>
							<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
							<span className='channel-member-name'>Sigma Houssna</span>
						</div>
						<div className='channel-member-btns-container'>
							<ImgButton src={kick} alt="kick user" classes="channel-member-btn" onClick={handleKickMember}/>
							<ImgButton src={ban} alt="ban user" classes="channel-member-btn" onClick={handleBanMember}/>
							<ImgButton src={timeout} alt="give user a timeout" classes="channel-member-btn" onClick={handleTimeoutMember}/>
							<ImgButton src={mute} alt="mute user" classes="channel-member-btn" onClick={handleMuteMember}/>
						</div>
					</div>

					<div className='channel-member-box'>
						<div className='channel-member-info-container'>
							<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
							<span className='channel-member-name'>Sigma Houssna</span>
						</div>
						<div className='channel-member-btns-container'>
							<ImgButton src={kick} alt="kick user" classes="channel-member-btn" onClick={handleKickMember}/>
							<ImgButton src={ban} alt="ban user" classes="channel-member-btn" onClick={handleBanMember}/>
							<ImgButton src={timeout} alt="give user a timeout" classes="channel-member-btn" onClick={handleTimeoutMember}/>
							<ImgButton src={mute} alt="mute user" classes="channel-member-btn" onClick={handleMuteMember}/>
						</div>
					</div>

					<div className='channel-member-box'>
						<div className='channel-member-info-container'>
							<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
							<span className='channel-member-name'>Sigma Houssna</span>
						</div>
						<div className='channel-member-btns-container'>
							<ImgButton src={kick} alt="kick user" classes="channel-member-btn" onClick={handleKickMember}/>
							<ImgButton src={ban} alt="ban user" classes="channel-member-btn" onClick={handleBanMember}/>
							<ImgButton src={timeout} alt="give user a timeout" classes="channel-member-btn" onClick={handleTimeoutMember}/>
							<ImgButton src={mute} alt="mute user" classes="channel-member-btn" onClick={handleMuteMember}/>
						</div>
					</div>

					<div className='channel-member-box'>
						<div className='channel-member-info-container'>
							<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
							<span className='channel-member-name'>Sigma Houssna</span>
						</div>
						<div className='channel-member-btns-container'>
							<ImgButton src={kick} alt="kick user" classes="channel-member-btn" onClick={handleKickMember}/>
							<ImgButton src={ban} alt="ban user" classes="channel-member-btn" onClick={handleBanMember}/>
							<ImgButton src={timeout} alt="give user a timeout" classes="channel-member-btn" onClick={handleTimeoutMember}/>
							<ImgButton src={mute} alt="mute user" classes="channel-member-btn" onClick={handleMuteMember}/>
						</div>
					</div>

				</div>	
				<ClassButton name="Close" classes="retro-button orange-header close-channel-members-btn" onClick={onClose}/>
			</div>
		</div>
	)
}

export default ChannelMembers
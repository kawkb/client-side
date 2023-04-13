import React from 'react'
import ClassButton from '../ClassButton'
import squares from '../../assets/img/squares.png'
import ImgButton from '../ImgButton'
import invite from '../../assets/img/invite.png'
import invited from '../../assets/img/invited.png'

function ChannelInvite({onClose}: {onClose: () => void}) {

	const [searchedUser, setSearchedUser] = React.useState<string>('')
	const [invitedUser, setInvitedUser] = React.useState<boolean>(false);

	const handleInviteUser = () => {
		console.log('Invite User');
		setInvitedUser(!invitedUser);
	}

  return (
	<div className='invite-to-channel-popup copy-book-background retro-border-box trans-orange-box'>
		<div className='invite-to-channel-container'>
			<h1 className='invite-to-channel-title'>Invite to Channel</h1>
				<div className='invite-search-list-container'>
					<input className="invite-search-input" type="text" placeholder='Seach...'/>
					
					<div className='invite-search-list scrollable'>
						
						<div className='invite-search-list-item'>
							<div className='invite-user-avatar-name-container'>
								<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
								<span className='channel-member-name'>Sigma Houssna</span>
							</div>
							{!invitedUser && <ImgButton src={invite} alt="invite user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
							{invitedUser && <ImgButton src={invited} alt="invited user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
						</div>
					
					
						<div className='invite-search-list-item'>
							<div className='invite-user-avatar-name-container'>
								<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
								<span className='channel-member-name'>Sigma Houssna</span>
							</div>
							{!invitedUser && <ImgButton src={invite} alt="invite user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
							{invitedUser && <ImgButton src={invited} alt="invited user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
						</div>

						<div className='invite-search-list-item'>
							<div className='invite-user-avatar-name-container'>
								<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
								<span className='channel-member-name'>Sigma Houssna</span>
							</div>
							{!invitedUser && <ImgButton src={invite} alt="invite user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
							{invitedUser && <ImgButton src={invited} alt="invited user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
						</div>


						<div className='invite-search-list-item'>
							<div className='invite-user-avatar-name-container'>
								<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
								<span className='channel-member-name'>Sigma Houssna</span>
							</div>
							{!invitedUser && <ImgButton src={invite} alt="invite user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
							{invitedUser && <ImgButton src={invited} alt="invited user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
						</div>


						<div className='invite-search-list-item'>
							<div className='invite-user-avatar-name-container'>
								<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
								<span className='channel-member-name'>Sigma Houssna</span>
							</div>
							{!invitedUser && <ImgButton src={invite} alt="invite user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
							{invitedUser && <ImgButton src={invited} alt="invited user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
						</div>

						<div className='invite-search-list-item'>
							<div className='invite-user-avatar-name-container'>
								<img className="channel-member-avatar" src={squares} alt="channel member avatar" />
								<span className='channel-member-name'>Sigma Houssna</span>
							</div>
							{!invitedUser && <ImgButton src={invite} alt="invite user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
							{invitedUser && <ImgButton src={invited} alt="invited user" classes="invite-user-to-channel-btn" onClick={handleInviteUser}/> }
						</div>

					</div>	
				</div>
			<ClassButton name="Close" classes="retro-button orange-header close-channel-members-btn" onClick={onClose}/>
		</div>
	</div>
  )
}

export default ChannelInvite
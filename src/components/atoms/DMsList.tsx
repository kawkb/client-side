import { useEffect } from 'react';
import { createRandomDMList } from '../../hooks/useChatList';
import useDMsParams from '../../hooks/useDMsParams';


// type ChatListProps = {
// 	  chats: ChatModel[];
// }

function DMsList() {

	const dmsList = useDMsParams(state => state.dmsList);
	const setDMsList = useDMsParams(state => state.setDMsList);
	const activeDMs = useDMsParams(state => state.activeDMs);
	const activeDMsOptions = useDMsParams(state => state.activeDMsOptions);
	const setActiveDMs = useDMsParams(state => state.setActiveDMs);
	const setActiveDMsOptions = useDMsParams(state => state.setActiveDMsOptions);



	useEffect(() => { setDMsList(createRandomDMList()) }, []);

	const handleMenuClick = (menuItem: string) => {
		console.log(menuItem);
	}

	const handleButtonClick = (itemId: string, itemName: string) => {
		console.log(`item id: ${itemId} ${itemName}`);
		setActiveDMsOptions(itemId);
	}

	const handleCloseOptions = () => {
		setActiveDMsOptions('');
	}

	const handleMuteUser = () => {
		console.log('mute user');
		if (activeDMsOptions)
		{
			setActiveDMsOptions('');
		}
	}

	const handleBlockUser = () => {
		console.log('leave channel');
		if (activeDMsOptions)
		{
			setActiveDMsOptions('');
		}
	}

	const handleInviteToPlay = () => {
		console.log('invite to play');
		if (activeDMsOptions)
		{
			setActiveDMsOptions('');
		}
	}


	const handleGotoProfile = () => {
		console.log('goto profile');
		// activeDMsOptions.id is the user id of the user we want to go to
		if (activeDMsOptions)
		{
			setActiveDMsOptions('');
		}
	}

  return (
	<div className='chat-list scrollable'>
		{
			dmsList.map((item, index) => {
				const itemName = item.user.name;
				return (
					<div key={item.id}>
					{ (activeDMsOptions === null || (activeDMsOptions?.id !== item.id)) &&
					<div className='chat-list-item'>
						<span className='chat-list-item-name' onClick={
						() => {setActiveDMs(item.id)}}> {itemName} </span>
						<button className="three-dot-menu-button" onClick={() => handleButtonClick(item.id, itemName)}>
							<div className="three-dot-menu-dot" ></div>
							<div className="three-dot-menu-dot" ></div>
							<div className="three-dot-menu-dot" ></div>
						</button>
					</div>
					}
						{ activeDMsOptions && (activeDMsOptions.id === item.id) && 
						<div className='chat-list-item-options'>
							<span className='chat-list-option dm-option' onClick={handleGotoProfile}>Profile</span>
							<span className='chat-list-option dm-option' onClick={handleInviteToPlay}>Play</span>
							{/* <span className='chat-list-option dm-option' onClick={handleMuteUser}>Mute</span> */}
							<span className='chat-list-option dm-option chat-list-option-last' onClick={handleBlockUser}>Block</span>
							<button className='chat-list-options-close' onClick={handleCloseOptions}>x</button>
						</div> 
						}
					</div>
				)
			})
		}
	</div>
  )
}

export default DMsList
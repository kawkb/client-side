import React, { useEffect, useState } from 'react'
import enable2fasvg from './../assets/svg/enable2fa.svg'
import nickname from './../assets/svg/nickname.svg'
import editpic from './../assets/svg/editpic.svg'
import heart from './../assets/svg/heart.svg'
import greenflower from './../assets/svg/greenflower.svg'
import redflower from './../assets/svg/redflower.svg'
import ImgUpload from './ImgUpload'
import ImgButton from './ImgButton'
import ToggleButton from './ToggleButton'
import CustomToggleButton from './CustomToggle'
import Popup from './Popup'
import CreateChat from './CreateChat'
import Enable2fa from './Enable2fa'
import { useEnable2fa } from '../hooks/useEnable2fa';
import zustand from "zustand";
import { create } from "zustand";
import { useProfileImage } from '../hooks/useProfileImage';
import { useAuth } from '../useAuth'
import { useNickname } from '../hooks/useNickname';
import api from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useFriendButton } from '../hooks/useFriendButton'

function Control() {
	const { login } = useParams();
	const nav = useNavigate();
	const { user, setUserState, loading } = useAuth();
	// const [friendButton, setFriendButton] = useState('');
	const friendButton = useFriendButton((state) => state.friendButton);
	const setFriendButton = useFriendButton((state) => state.setFriendButton);
	const [friendButtonColor, setFriendButtonColor] = useState('');
	const[blockButton, setBlockButton] = useState('');
	// const [playButton, setPlayButton] = useState('Let\'s play!');

	useEffect(() => {
		if(loading) return;
		if(!user) return;
		api.get("/profile/" + login + "/info")
		.then(response => {
			console.log("control", response.data);
			if(response.data.friendship === "PENDING") {
				setFriendButton('Pending');
				setFriendButtonColor('gray-header');
				setBlockButton('Block');
			} else if(response.data.friendship === "ACCEPTED") {
				setFriendButton('Unfriend');
				setFriendButtonColor('red-header');
				setBlockButton('Block');
			} else if(response.data.friendship === "BLOCKED") {
				setBlockButton('Unblock');
				setFriendButton('Blocked');
				setFriendButtonColor('white-header');
			} else {
				setFriendButton('befriend');
				setBlockButton('Block');
				setFriendButtonColor('flower-green');
			}
		})
		.catch(error => {
			console.log(error);
			nav("/404", { replace: true });
		});
	}, [user, loading]);



	// add friend logic:
	const friendHandleCLick = () => {
		if (blockButton === 'Unblock') {
			setFriendButton('Blocked');
			setFriendButtonColor('white-header')
			toast.error('You can\'t be friends with a blocked user!', {
				position: "top-right"
			  })
			return;
		}
		if (friendButton === 'Unfriend') {
			api.post("/friend/unfriend/" + login)
			.then(response => {
				console.log(response);
				setFriendButton('befriend');
				setFriendButtonColor('flower-green');
			})
			.catch(error => {	
				console.log(error);
			});
		} else if (friendButton === 'befriend'){
			api.post("/friend/add/" + login)
			.then(response => {
				console.log(response);
				setFriendButton('Pending');
				setFriendButtonColor('gray-header');
			})
			.catch(error => {
				console.log( "erradi is dog ", error.response);
			});
		}
	}

	// invite to play logic:
	const playHandleCLick = () => {
		toast.success('game invitation has been sent with style!', {
			position: "top-right"
		  })
	}

	const blockHandleCLick = () => {
		if (blockButton === 'Block') {
		setBlockButton('Unblock');
		setFriendButton('Blocked');
		setFriendButtonColor('white-header')
		api.post("/friend/block/" + login)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
	} else if (blockButton === 'Unblock'){
		setBlockButton('Block');
		setFriendButton('befriend');
		setFriendButtonColor('flower-green');
		api.post("/friend/unblock/" + login)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
	}
	}

	return (
		<div className='settings-container'>

			<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
				<h1> Update your gaming bond! </h1>
				<div className='retro-button-container'>
					<button className={"retro-button " + friendButtonColor} onClick={friendHandleCLick}>{friendButton}</button>
				</div>
			</div>


			<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
				<h1> Are you feeling lucky? </h1>
				<div className='retro-button-container'>
					<button className="retro-button pink-header" onClick={playHandleCLick}>Let's play!</button>
				</div>
			</div>


			<div className='copy-book-background retro-border-box trans-pink-box setting-box'>
				<h1> Block Out the Noise! </h1>
				<div className='retro-button-container'>
					<button className="retro-button pink-header" onClick={blockHandleCLick}>{blockButton}</button>
				</div>
			</div>
		</div>
	);
}

export default Control;
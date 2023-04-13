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

function Control() {
	const { login } = useParams();
	const nav = useNavigate();
	const { user, setUserState, loading } = useAuth();
	const [friendButton, setFriendButton] = useState('');
	const [friendButtonColor, setFriendButtonColor] = useState('');
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
			} else if(response.data.friendship === "ACCEPTED") {
				setFriendButton('Unfriend');
				setFriendButtonColor('red-header');
			} else if(response.data.friendship === "BLOCKED") {
				nav("/404", { replace: true });
			} else {
				setFriendButton('befriend');
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
		api.post("/friend/block/" + login)
		.then(response => {
			console.log(response);
			nav("/404", { replace: true });
		})
		.catch(error => {
			console.log(error);
		});
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
					<button className="retro-button pink-header" onClick={blockHandleCLick}>Block</button>
				</div>
			</div>
		</div>
	);
}

export default Control;
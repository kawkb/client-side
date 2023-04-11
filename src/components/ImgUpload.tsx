import React, {useRef} from 'react'
import zustand from "zustand";
import { create } from "zustand";
import { useProfileImage } from '../hooks/useProfileImage';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function ImgUpload({classes}: {classes: string}) {
	const nav = useNavigate();
	const setProfilImage = useProfileImage((state) => state.setImage);
	// const profileImage = useProfileImage((state) => state.image);

	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			// const formData = new FormData();
			// formData.append('avatar', file);
			api
      		.post("/profile/update/avatar", file, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			})
      		.then((res) => {
      		  console.log(res.data);
			  setProfilImage(res.data.avatar_url);
      		})
      		.catch((err: AxiosError) => {
      		  if (err.response) {
      		    if (err.response.status === 404) nav("/404", { replace: true });
      		  }
      		});
			console.log(file);
		}
	};

	const handleCLick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	
	return (
		<div className='retro-button-container'>
			<button className={classes} onClick={handleCLick}>Click here</button>
			<input type="file" accept="image/*" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileInputChange} />
		</div>
  	);
}

export default ImgUpload
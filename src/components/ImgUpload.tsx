import React, {useRef} from 'react'

function ImgUpload({classes}: {classes: string}) {
	
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			// Do something with the selected file
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
import React from 'react'

function ImgButton({ src, alt, classes, onClick }: { src: string, alt: string, classes: string, onClick: () => void }) {
  return (
	<button className={classes} onClick={onClick}>
		<img src={src} alt={alt} style={{cursor: 'pointer'}} 
		onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}/>
	</button>
  )
}

export default ImgButton
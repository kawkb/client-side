import React from 'react'

function ImgButton({ src, alt, onClick }: { src: string, alt: string, onClick: () => void }) {
  return (
	<button onClick={onClick} style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}>
		<img src={src} alt={alt} style={{cursor: 'pointer'}} 
		onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}/>
	</button>
  )
}

export default ImgButton
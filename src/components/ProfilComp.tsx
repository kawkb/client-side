import React from 'react'
import TabBox from './TabBox'
import Settings from './Settings';

function ProfilComp() {
	const options = [
		{ name: "Profil", content: <Settings />},
		{ name: "Friends", content: <Settings />},
		{ name: "Settings", content: <Settings />}
	];
	const color :string = "pink";
	return (
	<div className='pattern-background pink-pattern'>
		<TabBox options={options} tabcolor={color} imgbtn={false}/>		
	</div>
  )
}

export default ProfilComp
import React from 'react'
import TabBox from './TabBox'
import Settings from './Settings';
import squares from '../assets/img/squares.png'

function ProfilComp() {
	const options = [
		{ name: "Profil", content: <Settings />},
		{ name: "Friends", content: <Settings />},
		{ name: "Settings", content: <Settings />}
	];

	const color :string = "pink";
	return (
	<div className='pattern-background pink-pattern'>
		<TabBox options={options} tabcolor={color} imgbtn={false} title={"Mike Wazawski"} avatar={squares}/>		
	</div>
  )
}

export default ProfilComp
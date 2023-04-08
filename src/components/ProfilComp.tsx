import React from 'react'
import TabBox from './TabBox'
import Settings from './Settings';
import squares from '../assets/img/squares.png'
import Profil from './Profil';

function ProfilComp() {
	const options = [
		{ name: "Profil", content: <Profil />},
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
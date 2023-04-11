import React, { useEffect } from 'react'
import TabBox from './TabBox'
import Settings from './Settings';
import squares from '../assets/img/squares.png'
import Profil from './Profil';
import api from '../api/api';
import { useAuth } from '../useAuth';

function ProfilComp() {
    const {user} = useAuth();
    useEffect(() => {
        console.log('profile useeffect')
        // api.get('/auth/me').then((res) => {
        //     console.log(res.data);
        // }
        console.log(user);
        
    }, []);

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
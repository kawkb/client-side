import React from 'react'
import { useState } from 'react';
import baseavatar from './../assets/svg/baseavatar.svg'
import squares from '../assets/img/squares.png'

// interface TabBoxProps {
// 	options:[{
// 		tab:string,
// 		elem:JSX.Element
// 	}],
// 	optionas:Array<{
// 		tab:string,
// 		elem:JSX.Element
// 	}>
// }

interface TabBoxObj {
	name: string;
	content: React.ReactNode;
}

interface TabBoxProps {
	options: TabBoxObj[];
}

function TabBox({ options }:TabBoxProps) {
	
	const [activeTab, setActiveTab] = useState(0);

	const changeTab = (index : number) => {
		setActiveTab(index);
	}

  return (
	<div className='tab-box chat-container retro-border-box light-box'>

		<div className='tabs-header pink-header'>
			<div className='tabs-container'>
				{options.map(({name, content}, index) => (
					<button key={index} className={activeTab === index? "tab active-tab" : "tab"} onClick={() => changeTab(index)}>
						{name}
					</button>
				))}
			</div>
			<div className='tab-box-title'>
				<h1>Mike Wazowski</h1>
			</div>
			<div className='tab-box-avatar-container'>
				<img src={squares} className="tab-box-avatar" alt='avatar' />
			</div>
		</div>
		
		<div className='tabs-content'>
			
			{options.map(({name, content}, index) => (
				<div key={index} className={activeTab === index? "tab-content active-tab-content" : "tab-content"}>
					{content}
				</div>
			))}
		</div>
	</div>
  );
}

export default TabBox
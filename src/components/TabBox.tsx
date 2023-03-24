import React from 'react'
import { useState } from 'react';
import Settings from './Settings';

function TabBox() {
	const [activeTab, setActiveTab] = useState(3);

	const changeTab = (index : number) => {
		setActiveTab(index);
	}

  return (
	<div className='tab-box chat-container retro-border-box light-box'>

		<div className='tabs-header pink-header'>
			<button className={activeTab === 1? "tab active-tab" : "tab"} onClick={() => changeTab(1)}>
				Profil
			</button>
			<button className={activeTab === 2? "tab active-tab" : "tab"} onClick={() => changeTab(2)}>
				Friends
			</button>
			<button className={activeTab === 3? "tab active-tab" : "tab"} onClick={() => changeTab(3)}>
				Settings
			</button>
		</div>
		
		<div className='tabs-content'>
			<div className={activeTab === 1? "tab-content active-tab-content" : "tab-content"}>
				
				<h2>Content 1</h2>
				<hr />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
					praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
					vel voluptatum?
				</p>
			</div>

			<div className={activeTab === 2? "tab-content active-tab-content" : "tab-content"}>
				<h2>Content 2</h2>
				<hr />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            		voluptatum qui adipisci.
				</p>
			</div>

			<div className={activeTab === 3? "tab-content active-tab-content" : "tab-content"}>
				<Settings />
				{/* <h2>Content 3</h2>
				<hr />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
					nostrum rerum laudantium totam unde adipisci incidunt modi alias!
					Accusamus in quia odit aspernatur provident et ad vel distinctio
					recusandae totam quidem repudiandae omnis veritatis nostrum
					laboriosam architecto optio rem, dignissimos voluptatum beatae
					aperiam voluptatem atque. Beatae rerum dolores sunt.
				</p> */}
			</div>
		</div>
	</div>
  );
}

export default TabBox
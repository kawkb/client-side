
import React from 'react'
import ClassButton from '../components/ClassButton'
import squares from "../assets/img/squares.png";


function enable2fabutton() {
    console.log("2fa enabled");
}
function cancel2fabutton() {
    console.log("2fa canceled");
}

function twofa() {
    const [towfacode, setTowfacode] = React.useState<string>('');

  return (
    <div className='copy-book-background retro-border-box trans-pink-box setting-box'>
             <img className="svg-text svg-text-margin" src={squares} alt="" />
        <div className='nickname-input'>
            <input type="text" placeholder='Insert 2fa code' value={towfacode}  onChange={(e) => setTowfacode(e.target.value)}/>
        <div className='create-button-container'>
			<ClassButton name="Enable" classes="retro-button pink-header confirm-new-chat-btn" onClick={enable2fabutton} />
			<ClassButton name="Cancel" classes="retro-button pink-header confirm-new-chat-btn" onClick={cancel2fabutton}/>
		</div>
    </div>
    </div>
  )
}

export default twofa
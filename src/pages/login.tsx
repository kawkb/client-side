import React from 'react'
import ClassButton from '../components/ClassButton'
import authService from '../api/authService'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { log } from 'console'
// import Cookies from 'js-cookie'

function Login() {

	const handleClick = async() => {
		authService.login()
	}
		
	const nav = useNavigate();
  useEffect(() => {
    // // check if token is set in cookie
    // const token = Cookies.get("accessToken");
    // if (token) nav("/");
  });

    return (
        <div className='login-page'>
            <main className='main-page'>
                <img className='animation-element' src="https://ucarecdn.com/729576d3-3ec3-4d73-91dd-b0d9cb017600/rainbow.svg" id='rainbow' alt="" />
                <img className='animation-element' src="https://ucarecdn.com/3c97cddf-8f15-4319-b83b-48aa2f420f28/kawkaberradi.svg" id="couple" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/8b35d560-97bb-4f93-b98f-fa6b4f638c2d/stars.svg" id="stars1" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/8b35d560-97bb-4f93-b98f-fa6b4f638c2d/stars.svg" id="stars2" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/d28d1701-b50e-4ca0-a953-55f2ccf2036b/ziyad.svg" id="ziyad" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/eb360981-9bb0-4857-bc36-dc12df0f8220/houssna.svg" id="houssna" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/80ed8731-aad5-4214-a502-03c9c6c14460/cloud3.svg" id="cloud1" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/6f9e24dc-6a90-41ee-ae19-f6da2d8b89c3/cloud1.svg" id="cloud2" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/6f9e24dc-6a90-41ee-ae19-f6da2d8b89c3/cloud1.svg" id="cloud3" alt="" />
                <img className='animation-element' src="https://ucarecdn.com/dbeef34c-8020-4eb0-a419-e6d2f4e8491f/cloud2.svg" id="cloud4" alt="" />


			</main>
			{/* <ClassButton name={"Click to start"} classes={"login-button"} onClick={handleClick}/> */}
			<button className='login-button' onClick={handleClick
			}>Click here</button>
        </div>
    )
}

export default Login
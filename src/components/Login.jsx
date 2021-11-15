import React from 'react'
import logo from '../pictures/logo.png'
import {useAuth0} from '@auth0/auth0-react'

function Login() {
    const  {loginWithRedirect } = useAuth0();
    return (
        <>
        <div>
        <img src={logo} alt="IDP" style={{width:"170px", height:"80px"}}/>
        </div>
        <div>
            <button id="btn-login" onClick={()=>{loginWithRedirect()}}>Login</button>
        </div>
        </>
    )
}

export { Login }

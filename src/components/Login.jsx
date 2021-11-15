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
            <button style={{width:"180px", height :"50px",color : "#fefeff" ,backgroundColor : "#0059d6", border:"none", borderRadius:"5px", fontSize:"18px"}} id="btn-login" onClick={()=>{loginWithRedirect()}}>Login</button>
        </div>
        </>
    )
}

export { Login }

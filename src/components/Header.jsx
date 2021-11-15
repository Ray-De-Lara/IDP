import React from 'react'
import logo from '../pictures/logo.png'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
    const {user, isAuthenticated, isLoading} = useAuth0(); 
    const {logout} = useAuth0() ;
    if (isLoading){
        return <div>Loading...</div>
    }
    return(
        isAuthenticated &&(
            <header style={{display:"flex", justifyContent:"space-between", marginTop:"1px"}}>
        <div>
            <img src={logo} alt="IDP" style={{width:"170px", height:"80px"}}/>
        </div>
        <div style={{display: "flex", alignItems:"center", flexDirection:"column", marginRight:"10px"}}>
            <h2 style={{marginBottom: "-15px"}}>Bienvenido!</h2>
            <h2 style={{marginBottom:"1px"}}>{user.name}</h2>
            {/* <img src={user.picture} alt={user.name} style={{borderRadius : "50%", display:'flex', alignItems:"center", justifyContent:"center"}}/> */}
            {/* <p>Email: {user.email}</p> */}
            <button onClick={()=>{logout({returnTo : "https://ray-de-lara.github.io/idp"})}}>Logout</button>
        </div>
        
        </header>
        )
    )
    }
export  {Header}

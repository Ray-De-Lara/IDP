import React from 'react'
import {Tripod} from './Tripod'
import './Map.css'




function Map() {
    
   
    
    const newRandNum=()=>{
        const  randnum = Math.random(1,0)
        return randnum
    }

        
    return (
        <>
        
        <div>
            <div className="map-container">

                <Tripod key={newRandNum}/>
                <Tripod key={newRandNum}/>
                <Tripod key={newRandNum}/>
                <Tripod key={newRandNum}/>
                <Tripod key={newRandNum}/>
                <Tripod key={newRandNum}/>

            </div> 
        </div>

        </>
    )
}

export {Map}    
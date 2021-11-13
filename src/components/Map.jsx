import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import {Tripod} from './Tripod'
import './Map.css'




const BasesList = [
    {
        id:'1',
        name: "Tripode",
        item:"tripod"
    },

]



function Map() {
    
    // const [cuadro, setCuadro] = useState([]);
    

    // const addComponentToBoard = (id) => {
    //     const basesList = BasesList.filter((base) => id === base.id);
    //     setCuadro((cuadro) => [...cuadro, basesList[0]]);
    //     // setMap([basesList[0]]);
    // };
    
    
    
    // const [,drop] = useDrop(()=>({
    //     accept:"tripod",
    //     drop : (item) =>addComponentToBoard(item.id),
    // }))
    
    
    const newRandNum=()=>{
        const  randnum = Math.random(1,0)
        return randnum
    }

    



    
    return (
        <>
        
        <div>
            <div className="map-container" >
            {/* ref={drop} */}

                {/* {cuadro.map(()=>{
                    return <Tripod key={newRandNum}/>
                    
                })} */}
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
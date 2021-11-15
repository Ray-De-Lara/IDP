import fresnel6 from '../pictures/fresnel6in.svg'
import fresnel8 from '../pictures/fresnel8in.svg'
import RLeko21 from '../pictures/RadialLeko21deg.svg'
import RLeko25 from '../pictures/RadialLeko25deg.svg'
import RLeko35 from '../pictures/RadialLeko35deg.svg'
import RLeko56 from '../pictures/RadialLeko56deg.svg'
import Par4 from '../pictures/par4.svg'
import Par38 from '../pictures/par38.svg'
import Par56 from '../pictures/par56.svg'
import Par64 from '../pictures/par64.svg'
import ALeko11 from '../pictures/ALeko11.svg'
import ALeko18 from '../pictures/ALeko18.svg'
import ALeko19 from '../pictures/ALeko19.svg'
import ALeko23 from '../pictures/ALeko23.svg'
import ALeko26 from '../pictures/ALeko26.svg'
import ALeko28 from '../pictures/ALeko28.svg'
import ALeko37 from '../pictures/ALeko37.svg'
import ALeko38 from '../pictures/ALeko38.svg'
import ALeko48 from '../pictures/ALeko48.svg'
import ALeko55 from '../pictures/ALeko55.svg'
import Silla from '../pictures/silla.svg'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { Picture } from './Picture'




const PictureList = [
    {
        id: '2',
        id2: 'Fresnel',
        url: fresnel6,
        name: 'Fresnel 6"'
    },
    {
        id: '4',
        id2: 'Fresnel',
        url: fresnel8,
        name: 'Fresnel 8"'
    },
    {
        id: '5',
        id2: 'RLeko',
        url: RLeko21,
        name: 'Leko Radial 21 deg'
    },
    {
        id: '6',
        id2: 'RLeko',
        url: RLeko25,
        name: 'Leko Radial 25 deg'
    },
    {
        id: '7',
        id2: 'RLeko',
        url: RLeko35,
        name: 'Leko Radial 35 deg'
    },
    {
        id: '8',
        id2: 'RLeko',
        url: RLeko56,
        name: 'Leko Radial 56 deg'
    },
    {
        id:'10',
        id2: 'Par',
        url : Par4,
        name: "Par 4"
    },
    {
        id:'11',
        id2: 'Par',
        url : Par38,
        name: "Par 38"
    },
    {
        id:'12',
        id2: 'Par',
        url : Par56,
        name: "Par 56"
    },
    {
        id:'13',
        id2: 'Par',
        url : Par64,
        name: "Par 64"
    },
    {
        id:'14',
        id2: 'ALeko',
        url : ALeko11,
        name: "Leko Axial 6x22 11deg"
    },
    {
        id:'15',
        id2: 'ALeko',
        url : ALeko18,
        name: "Leko Axial 3.5x12 18deg"
    },
    {
        id:'16',
        id2: 'ALeko',
        url : ALeko19,
        name: "Leko Axial 6x16 19deg"
    },
    {
        id:'17',
        id2: 'ALeko',
        url : ALeko23,
        name: "Leko Axial 3.5x10 23deg"
    },
    {
        id:'18',
        id2: 'ALeko',
        url : ALeko26,
        name: "Leko Axial 6x12 26deg"
    },
    {
        id:'19',
        id2: 'ALeko',
        url : ALeko28,
        name: "Leko Axial 3.5x8 28deg"
    },
    {
        id:'20',
        id2: 'ALeko',
        url : ALeko37,
        name: "Leko Axial 6x9 37deg"
    },
    {
        id:'21',
        id2: 'ALeko',
        url : ALeko38,
        name: "Leko Axial 3.5x6 38deg"
    },
    {
        id:'22',
        id2: 'ALeko',
        url : ALeko48,
        name: "Leko Axial 3.5x5 48deg"
    },
    {
        id:'23',
        id2: 'ALeko',
        url : ALeko55,
        name: "Leko Axial 4.5x6.5 55deg"
    },
    {
        id:'25',
        id2: 'Diseno',
        url : Silla,
        name: "Silla"
    },
];




function DropIllumination({numero}) {

    let totpicture = Math.random(0, 1) * 1000
    const [board, setBoard] = useState([]);

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // setBoard((board) => [...board, pictureList[0]]);
        setBoard([pictureList[0]]);
    };


    // {isOver}
    const [{canDrop}, drop] = useDrop(() => ({
        accept: "image",
        drop: (picture) => {
            { addImageToBoard(picture.id) 
                const square = document.getElementById(numero)
                square.style.display = "none"
            }
        },
        
        collect: (monitor) =>({
            canDrop : !!monitor.canDrop(),
            
        })

    }))





    return (
        <div>
            <div className="square-container" id="square-container" ref={drop} >
                <div className="square" style={{backgroundColor : canDrop ? "rgba(255, 0, 0, 0.5)" : "transparent"}} id={numero}  ></div>
                <div>
                    {board.map((picture) => {
                        return <Picture
                        url={picture.url}
                        id={totpicture}
                        key={picture.id}
                        name={picture.name}
                        id2={picture.id2}
                        
                        />
                    })}
                </div>
                
            </div>
                

        </div>
    )
}

export { DropIllumination }

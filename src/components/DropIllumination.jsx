import fresnel6 from '../pictures/fresnel6in.svg'
import fresnel8 from '../pictures/fresnel8in.svg'
import RLeko21 from '../pictures/RadialLeko21deg.svg'
import RLeko25 from '../pictures/RadialLeko25deg.svg'
import RLeko35 from '../pictures/RadialLeko35deg.svg'
import RLeko56 from '../pictures/RadialLeko56deg.svg'
import Silla from '../pictures/bigchair.svg'
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
        id2: 'Leko',
        url: RLeko21,
        name: 'Leko Radial 21 deg'
    },
    {
        id: '6',
        id2: 'Leko',
        url: RLeko25,
        name: 'Leko Radial 25 deg'
    },
    {
        id: '7',
        id2: 'Leko',
        url: RLeko35,
        name: 'Leko Radial 35 deg'
    },
    {
        id: '8',
        id2: 'Leko',
        url: RLeko56,
        name: 'Leko Radial 56 deg'
    },
    {
        id:'12',
        id2: 'Silla',
        url : Silla,
        name : "Silla",
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
                <div className="square" style={{backgroundColor : canDrop ? "rgba(255, 0, 0, 0.5)" : "white"}} id={numero}  ></div>
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

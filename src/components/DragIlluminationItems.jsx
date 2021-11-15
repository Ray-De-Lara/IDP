import fresnel6 from '../pictures/fresnel6in.svg'
import fresnel8 from '../pictures/fresnel8in.svg'
import RLeko21 from '../pictures/RadialLeko21deg.svg'
import RLeko25 from '../pictures/RadialLeko21deg.svg'
import RLeko35 from '../pictures/RadialLeko21deg.svg'
import RLeko56 from '../pictures/RadialLeko21deg.svg'
import Silla from '../pictures/bigchair.svg'
import React from 'react'
import './Drag.css'
import { DragItems } from './DragItems';
import { BasesItems } from './BasesItems';


const ItemsList = [
    {
        id: '1',
        packetName: 'Illumination',
        children:[
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
        ],
    },
    {
        id: '9',
        packetName : 'Baras',
        children : [
            {
                id:'10',
                name: "Bara"
            },

        ]

    },
    {
        id:'11',
        packetName : 'Diseno', 
        children : [
            {
                id:'12',
                id2 : 'Silla',
                url : Silla,
                name: "Big Silla"
            }
        ]
    }

    ];


function DragIlluminationItems() {
    const nuevaI = [];
    const nuevaB = [];
    const nuevaC = [];




     return (
        <div className="picture-container">
            <div className="pictures">


{        ItemsList.map((e)=>{
            if(e.packetName ==='Illumination'){
                const nuevI = e.children.slice(0,8);
                nuevI.map((picture)=>{
                    nuevaI.push(picture);
                    return nuevaI;
                })
            }
            else if (e.packetName ==='Baras'){
                const nuevB = e.children.slice(0,1);
                nuevB.map((base)=>{
                    nuevaB.push(base);
                    return nuevaB;
                })
            }
            else if (e.packetName ==='Diseno'){
                const nuevC = e.children.slice(0,1);
                nuevC.map((elemento)=>{
                    nuevaC.push(elemento);
                    return nuevaC;
                })
            }
            return undefined;
        })
        
}

                <div className="elements-container">
                    <div className="expand" onClick={()=>{document.getElementById("fresnel-container").classList.toggle("mostrar")}}>Fresnel 
                    <i className="fas fa-arrow-down" ></i></div>

                    <nav className="fresnel-container" id="fresnel-container">             
                    {nuevaI.map((picture)=>{
                            if(picture.id2 === "Fresnel"){
                            return <DragItems 
                            name ={picture.name}
                            id={picture.id} 
                            key={picture.id}
                            />;
                            }
                        })}
                    </nav>
                    
                    <div className="expand" onClick={()=>{document.getElementById("leko-container").classList.toggle("mostrar")}}>Leko
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="leko-container" id="leko-container">
                        {nuevaI.map((picture)=>{
                            if(picture.id2 === "Leko"){
                            return <DragItems 
                            name ={picture.name}
                            id={picture.id} 
                            key={picture.id}
                            />;
                            }
                        })}
                    </nav>
                    
                    
                    <div className="expand" onClick={()=>{document.getElementById("bara-container").classList.toggle("mostrar")}}>Baras
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="bara-container" id="bara-container">
                    {nuevaB.map((base) =>{
                        return <BasesItems
                        name={base.name}
                        key={base.id}/>;                    
                    })}
                    </nav>

                    <div className="expand" onClick={()=>{document.getElementById("diseno-container").classList.toggle("mostrar")}}>Diseno
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="diseno-container" id="diseno-container">
                        {nuevaC.map((elemento)=>{
                            if(elemento.id2 === "Silla"){
                            return <DragItems 
                            name ={elemento.name}
                            id={elemento.id} 
                            key={elemento.id}
                            />;
                            }
                        })}
                    </nav>

                </div>
            </div>
        </div>
    )
}

export {DragIlluminationItems}

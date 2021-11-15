import fresnel6 from '../pictures/fresnel6in.svg'
import fresnel8 from '../pictures/fresnel8in.svg'
import RLeko21 from '../pictures/RadialLeko21deg.svg'
import RLeko25 from '../pictures/RadialLeko21deg.svg'
import RLeko35 from '../pictures/RadialLeko21deg.svg'
import RLeko56 from '../pictures/RadialLeko21deg.svg'
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
                id:'14',
                id2: 'ALeko',
                url : ALeko55,
                name: "Leko Axial 4.5x6.5 55deg"
            },
        ],
    },
    // {
    //     id: '9',
    //     packetName : 'Par',
    //     children : [


    //     ]

    // },
    {
        id:'14',
        packetName : 'Diseno', 
        children : [
            {
                id:'15',
                id2 : 'Silla',
                url : Silla,
                name: "Silla"
            }
        ]
    }

    ];


function DragIlluminationItems() {
    const nuevaI = [];
    // const nuevaB = [];
    const nuevaC = [];




     return (
        <div className="picture-container">
            <div className="pictures">


{        ItemsList.map((e)=>{
            if(e.packetName ==='Illumination'){
                const nuevI = e.children.slice(0,22);
                nuevI.map((picture)=>{
                    nuevaI.push(picture);
                    return nuevaI;
                })
            }
            // else if (e.packetName ==='Baras'){
            //     const nuevB = e.children.slice(0,1);
            //     nuevB.map((base)=>{
            //         nuevaB.push(base);
            //         return nuevaB;
            //     })
            // }
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
                    
                    <div className="expand" onClick={()=>{document.getElementById("rleko-container").classList.toggle("mostrar")}}>Radial Leko
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="rleko-container" id="rleko-container">
                        {nuevaI.map((picture)=>{
                            if(picture.id2 === "RLeko"){
                            return <DragItems 
                            name ={picture.name}
                            id={picture.id} 
                            key={picture.id}
                            />;
                            }
                        })}
                    </nav>
                    <div className="expand" onClick={()=>{document.getElementById("par-container").classList.toggle("mostrar")}}>Par
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="par-container" id="par-container">
                        {nuevaI.map((picture)=>{
                            if(picture.id2 === "Par"){
                            return <DragItems 
                            name ={picture.name}
                            id={picture.id} 
                            key={picture.id}
                            />;
                            }
                        })}
                    </nav>
                    <div className="expand" onClick={()=>{document.getElementById("aleko-container").classList.toggle("mostrar")}}>Axial Leko
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="aleko-container" id="aleko-container">
                        {nuevaI.map((picture)=>{
                            if(picture.id2 === "ALeko"){
                            return <DragItems 
                            name ={picture.name}
                            id={picture.id} 
                            key={picture.id}
                            />;
                            }
                        })}
                    </nav>
{/*                     
                    <div className="expand" onClick={()=>{document.getElementById("bara-container").classList.toggle("mostrar")}}>Baras
                    <i className="fas fa-arrow-down" ></i></div>
                    
                    <nav className="bara-container" id="bara-container">
                    {nuevaB.map((base) =>{
                        return <BasesItems
                        name={base.name}
                        key={base.id}/>;                    
                    })}
                    </nav> */}

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

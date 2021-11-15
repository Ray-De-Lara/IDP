import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { DropIllumination } from './DropIllumination'
import { useDrag } from 'react-dnd'
import './Tripod.css'



function Tripod({id}) {


const addBaras = () => {
    var points = []
    for(var i=0; i<12; i++){ 
        points.push(<DropIllumination numero={i} />)

    }
    return points 

}


    const [, drag] = useDrag(() =>({
        type:"tripod",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
      return (
        <Fragment>

            
            <div ref={drag}>
                <div className="tripod-container">
                <div className="base"></div>
            
                
                    <div className="top">
                        
                        {addBaras()}

                    </div>
                    

                </div>
            
            </div>
        </Fragment> 
      )
    
}

export {Tripod}


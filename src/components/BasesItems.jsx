import React from 'react'
import {useDrag} from 'react-dnd'

function BasesItems({id, url,name}) {
    const [{isDragging}, drag] = useDrag(() =>({
        type:"tripod",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <>
        <li>    
        <div style={{borderRadius:"3px", backgroundColor:"#f5f6f7", cursor:"progress", marginBottom:"3px",padding:"10px"}}>
            <div 
                ref={drag}
                src={url} 
                width='90px' 
                style={{border: isDragging ? "5px solid pink" : "0px", color: isDragging ? "black" : "#6f6f6f"}}
                className="picture-item"
                alt={id}
            >
              {name}  
            </div>
        </div>
        </li>
        </>
    );

}

export {BasesItems}
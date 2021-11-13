import React from 'react'
import {DragPreviewImage, useDrag} from 'react-dnd'


function Picture({id, url,id2}) {


    const [{isDragging}, drag,preview] = useDrag(() =>({
        type:"",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }),[]);


    let turnAngle = 30;
    function turn(image){

        image.setAttribute("style", "transform : rotate(" + turnAngle + "deg)",);
        turnAngle += 30;
    }

    function erase(image){

        image.setAttribute("style", "display : none",);
    }

    const style1 = {
        transform:"scale(0.8,0.8)",
        display : "flex",
        justifyContent: "center",
        marginTop:"10px"  

    }
    const style2 ={
        transform:"scale(2,2)",
        display : "flex",
        justifyContent: "center",
        marginTop:"10px"  
    }

    if (id2 === 'Diseno'){
        console.log("Gigante")
    }
    else{
        console.log("Enano")
    }

    return (
        <>
    <div id={"item-container"+id}>
        <div style={id2==="Mesa" ? style2 : style1}>
        <DragPreviewImage connect={preview} src={url}/>
        <div onClick={()=>{erase(document.getElementById("item-container"+id))}}><i class="fas fa-times"></i></div>
        <img
            id ={id} 
            ref={drag}
            src={url} 
            width='90px' 
            style={{border: isDragging ? "5px solid pink" : "0px"}}
            className="picture-item"
            alt={id}
            id2={id2}

        />
        </div>

            <div className="fas fa-sync-alt"onClick={()=>{turn(document.getElementById(id))}} ></div>
    </div>
        </>
    );

}

export {Picture}


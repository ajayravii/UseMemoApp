import React from "react";
function Room3(props){
    console.log("Hi Room3")
    return(
        <>
        <h2>Hi Room3</h2>
         <button onClick={()=>props.handleClick}>Enter Room3</button><br/>
        </>
    )
}
export default React.memo(Room3,()=>{
    return false
});
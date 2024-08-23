import React from "react";
import Room3 from './Room3';
function Room2(props){
    console.log("Hi Room2")
    return(
        <>
        <h2>Hi Room2</h2>
        <Room3 props={props}/>
        </>
    )
}
export default Room2;
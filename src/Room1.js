import React from "react";
import Room2 from "./Room2";
function Room1(props){
    console.log("Hi Room1")
    return(
        <>
        <h2>Hi Room1</h2>
        <Room2 props={props} />
        </>
    )
}
export default Room1;
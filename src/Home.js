import React, {useState,useMemo, useCallback} from 'react'
import Room1 from './Room1';
import Room3 from './Room3';
function Home(){
    const [value,changeValue]=useState()
    // const roomKey={
    //     key:"100"
    // }
    const roomKey=useMemo(()=>{
        return {
            key:"100"
        }
    },[value])
    // const handleClick=useMemo(()=>{
    //       return ()=>changeValue(1000)
    // },[])
    const handleClick=useCallback(()=>changeValue(1000),[])
    console.log("Hi Home")
    return(
        <>
        <h1>Hi Home</h1>
        Value:{value}
        <Room3 roomKey={roomKey} handleClick={handleClick}/>
        <button onClick={()=>changeValue(100)}>Click</button>
        </>
    )
}
export default Home;
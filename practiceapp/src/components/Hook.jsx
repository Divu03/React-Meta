import React,{useState} from "react"

function Hook(){

    const [onState,setOnState] = useState("Yes it is on");
    return(
        <>
            <p>{onState}</p>
            <button onClick={setOnState("Turned it off")}></button>
            <p>{onState}</p>
        </>
    );
}

export default Hook;
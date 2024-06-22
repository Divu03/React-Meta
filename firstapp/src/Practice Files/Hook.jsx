import React,{useState} from "react"

function Hook(){

    const [onState,setOnState] = useState("Yes it is on");
    return(
        <>
            <p>{onState}</p>
            {setOnState("Noe turned off")}
            <p>{onState}</p>
        </>
    );
}

export default Hook;
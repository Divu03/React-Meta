import React,{useState} from "react"

function Hook(){

    let [onStatet,setOnStatet] = useState("Yes it is on");
    return(
        <div>
            <p>{onStatet}</p>
            <button onClick={() =>setOnStatet("Turned it off")}></button>
            <p>{onStatet}</p>
        </div>
    );
}

export default Hook;
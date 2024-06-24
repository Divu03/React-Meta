import React from "react";
import Image from "./Image";
import ReactPlayer from "react-player/youtube";

function App() {
    return(
        <div>
            <Image/>
            <Video/>
        </div>
    );
};

function Video(){
    return (
        <ReactPlayer url='https://www.youtube.com/watch?v=ee4mNBnU-rE' />
      );
}

export default App;

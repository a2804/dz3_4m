import React from 'react';
import kind from "./callS.module.css"

function Call(props) {
    const wind = () => {
        alert("HELLO WORLD");
    }


    return (
        <>
            <button className={kind.cont} onClick={wind}>Click</button>
        </>
    );
}

export default Call;
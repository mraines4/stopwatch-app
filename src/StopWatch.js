import React from 'react';

function StopWatch(props) {
    return (
        <div>
            <h1>
                {props.time}
            </h1>
            { props.status === false ? 
            <button onClick={props.handleStart}>
                START
            </button> : 
            <button onClick={props.handleStop}>
                STOP
            </button>}
        </div>
    )
}


export default StopWatch;
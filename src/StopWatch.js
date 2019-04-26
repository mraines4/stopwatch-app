import React from 'react';

function StopWatch(props) {
    return (
        <div>
            <h1>
                {props.time}
            </h1>
            <button onClick={props.handleStart}>
                START
            </button>
            <button onClick={props.handleStop}>
                STOP
            </button>
            <button onClick={props.handleReset}>RESET</button>
        </div>
    )
}


export default StopWatch;
import React from 'react';

function StopWatch(props) {
    return (
        <div>
            <h1>
                HOURS: {Math.floor(props.seconds / 3600)}
            </h1>
            <h1>
                MINUTES: {Math.floor((props.seconds / 60) % 60 )}
            </h1>
            <h1>
                SECONDS: {props.seconds % 60}
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
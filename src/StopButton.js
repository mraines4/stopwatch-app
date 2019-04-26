import React from 'react';

function StopButton(props) {
    return (
        <button onClick={props.handler}>
            STOP
        </button>
    )
}

export default StopButton;
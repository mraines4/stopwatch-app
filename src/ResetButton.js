import React from 'react';

function ResetButton(props) {
    return (
        <button onClick={props.handleReset}>
            RESET
        </button>
    )
}

export default ResetButton;
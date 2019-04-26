import React from 'react';

function ElapsedTime(props) {
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
        </div>
    )
}


export default ElapsedTime;
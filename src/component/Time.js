import React, {small} from 'react';

function Time() {
    return (
        <small>
            {new Date().toDateString()} | {new Date().toTimeString()}
        </small>
    )
}

export default Time;
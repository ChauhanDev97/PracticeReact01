import React from 'react';
import Time from './Time';

function Card(props) {
    return (
        <div className="card mt-3">
            <p className="card-header text-center"><Time/></p>
            <div className="card-body">
                <h5 className="card-title"> {props.name} ({props.age}) </h5>
                <p className="card-text"> {props.body} </p>
                <h6 className="btn btn-primary">Go somewhere </h6>
            </div>
        </div>
    )
}

export default Card

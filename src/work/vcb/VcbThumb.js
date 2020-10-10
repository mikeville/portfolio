import React from 'react';

function VcbThumb(props) {
    return (
        <div>
            <div>
            <img src={props.image}></img>
            </div>
            <div>{props.artist}</div>
            <div>{props.song}</div>
        </div>
    )
}

export default VcbThumb;
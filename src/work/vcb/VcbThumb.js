import React from 'react';

function VcbThumb(props) {
    return (
        <div className="VcbThumb">
            <div>
                <img className="VcbThumb__img" src={props.image}></img>
            </div>
            <div>{props.artist}</div>
            <div>{props.song}</div>
        </div>
    )
}

export default VcbThumb;
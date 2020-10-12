import React from 'react';
// import styled, { keyframes } from 'styled-components'

function Loader() {
    // const ripple = keyframes`{
    //         0%  { 
    //             transform: scale(0);
    //             opacity: 1;
    //         }
    //         100%  { 
    //             transform: scale(1);
    //             opacity: 0;
    //         }
    //     }
    // `
    const styles = {
        width: "2rem",
        height: "2rem",
        margin: "2rem",
        borderRadius: "50%",
        border: "0.3rem solid white",
        transform: "translate(50%)",
        // animation: `0.75s ${ripple} ease-out infinite`
    }
    return (
        <div style={styles}>
        </div>
    )
}
 
export default Loader;
import React from 'react';


export default function MyButton({increment, onIncrease}) {
    return ( 
        <button onClick={(e) => onIncrease(+increment)} >
            Increase {increment}
        </button>
    );
}
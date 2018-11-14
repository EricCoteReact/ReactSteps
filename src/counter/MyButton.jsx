import React from 'react';
import {Button} from 'reactstrap'

export default function MyButton({increment, onIncrease}) {
    return ( 
        <Button color="primary" onClick={(e) => onIncrease(+increment)} 
                className="mx-3"  >
            Increase {increment}
        </Button>
    ); 
}
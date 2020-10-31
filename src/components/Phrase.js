import React, { useState } from 'react';
import frases from '../frases.json';
import ProTypes from 'prop-types';

const DisplayPhrase = ({ randomFrom }) => {
    const [ phrase, setPhrase ] = useState(() => randomFrom(frases));
    
    if(phrase.text === undefined) setPhrase(() => randomFrom(frases));

    return ( 
        <div 
            className="phrase__container"
            onClick={() => setPhrase(() => randomFrom(frases))}
        >{phrase.text}</div>
    );
}

DisplayPhrase.prototype = {
    randomFrom: ProTypes.func.isRequired
}
 
export default DisplayPhrase;
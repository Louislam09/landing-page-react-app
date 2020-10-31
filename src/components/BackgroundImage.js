import React, { useState } from 'react';
import DisplayHour from './DisplayHour';
import DisplayName from './DisplayName';
import DisplayPhrase from './Phrase';
import ProTypes from 'prop-types';

const BackgroundImage = ({ randomFrom }) => {
    const [currectBackground, setCurrectBackground] = useState("");
    let randomNumber = Math.floor(Math.random() * 7);

    return (
        <div className={currectBackground}>
            <DisplayHour 
                randomNumber={randomNumber}
                setCurrectBackground={setCurrectBackground} 
            />
            <DisplayName />
            <DisplayPhrase randomFrom={randomFrom} />
        </div>
    )
}

BackgroundImage.prototype = {
    randomFrom : ProTypes.func.isRequired
}
 
export default BackgroundImage;
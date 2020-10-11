import React from 'react'
import ProTypes from 'prop-types';

const Result = ({result}) => {
    const { firstFruit, tithe, total } = result;

    return ( 
        <div className='container result__container'>
            <h2>Resultado</h2>

            <div className='row'>
                <div className='tithe col l12 m6 s6'>
                    <span>Diezmo</span>
                    <span>RD$ {tithe}</span>
                </div>
                <div className='firstFruit col l12 m6 s6'>
                    <span>Primicia</span>
                    <span>RD$ {firstFruit}</span>
                </div>
                <div className='total col l12 m12 s12'>
                    <span>Total</span>
                    <span>RD$ {total}</span>
                </div>
            </div>
        </div>
    );
}
 
Result.prototype = {
    result: ProTypes.object.isRequired
}

export default Result;
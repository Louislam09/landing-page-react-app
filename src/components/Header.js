import React from 'react';
import ProTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        // <nav>
        //     <div class="nav-wrapper light-blue darken-2">
        //         <a href="#!" class="brand-logo">Clima React App</a>
        //     </div>
        // </nav>

        <nav>
            <div className='nav-wrapper light-blue darken-2'>
                <a href="#!" className='brand-logo'>{title}</a>
            </div>
        </nav>
    );
}

Header.prototype = {
    title: ProTypes.string.isRequired
}

export default Header;

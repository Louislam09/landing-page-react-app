import React from 'react';

const DisplayName = ({ greeting }) => {

    const handleChange = e => {
        localStorage.setItem('user-name',JSON.stringify(e.target.innerText));
    }

    const getNameFromLocalStorage = () => {
        let userName = localStorage.getItem('user-name');

        if(userName === null || userName === ""){
            userName = "<nombre>";
        }else{
            userName = JSON.parse(userName);
        }

        return userName
    }

    let name = getNameFromLocalStorage();

    return ( 
        <div className="name__container">
            <div>
                {greeting}, 
                <span 
                    contentEditable={true} 
                    suppressContentEditableWarning={true}
                    onKeyUp={handleChange}
            >{name}</span>.
            </div>
        </div>
     );
}

export default DisplayName;

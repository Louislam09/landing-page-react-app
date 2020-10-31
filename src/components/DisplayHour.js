import React, { useEffect, useState } from 'react';
import './backgrounds.css';
import ProTypes from 'prop-types';

const DisplayHour = ({ setCurrectBackground, randomNumber }) => {
    const [time, setTime] = useState("0:00:00 am");
    const [AmOrPm, setAmOrPm] = useState("");

    const appendZero = number => number < 10 ? number = `0${number}` : number;
  
    useEffect(()=>{
        const getHour = () => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
    
            let format = hours >= 12 ? 'P.M' : 'A.M';
            hours = (hours % 12) || 12;
    
            setAmOrPm(f => f = format);
    
            return `${hours} : ${appendZero(minutes)} :${appendZero(seconds)} `;
        }

        const interval = setInterval(() => {
            setTime(time => time = getHour());
        }, 1000);
        return () => clearInterval(interval);
    },[]);

    if(AmOrPm === 'A.M'){
        setCurrectBackground(bg => bg = `morning_${randomNumber}`);
    }else if(parseInt(time.split(":")[0]) >= 6){
        setCurrectBackground(bg => bg = `afternoon${randomNumber}`);
    }else{
        setCurrectBackground(bg => bg =`night_${randomNumber}`);
    }

    return ( 
        <div className='hour__container'>
            <span>{time}</span> <span>{AmOrPm}</span>
        </div>
    );
}
 
DisplayHour.prototype ={
    setCurrectBackground: ProTypes.func.isRequired,
    randomNumber : ProTypes.number.isRequired
}
export default DisplayHour;
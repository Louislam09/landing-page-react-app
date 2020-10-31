import React, { useEffect, useState } from 'react';
import './backgrounds.css';
import ProTypes from 'prop-types';

const DisplayHour = ({ setCurrectBackground, randomNumber,setGreeting }) => {
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
            setTime(t => t = getHour());
        }, 1000);
        return () => clearInterval(interval);
    },[]);

    if(new Date().getHours() < 18 ){
        setCurrectBackground(bg => bg = `afternoon_${randomNumber}`);
        setGreeting(g => g = " Buenas Tardes");
    }else{
        setCurrectBackground(bg => bg =`night_${randomNumber}`);
        setGreeting(g => g = " Buenas Noches");
    }
    
    if(AmOrPm === 'A.M'){
        setCurrectBackground(bg => bg = `morning_${randomNumber}`);
        setGreeting(g => g = " Buenos Dias");
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
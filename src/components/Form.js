import React,{ useState, useEffect } from 'react';
import ProTypes from 'prop-types';

const Form = ({ setResult }) => {
    const options = [
        {innerText : '1 Hora', value : 'hour'},
        {innerText : '1 Dia', value : 'day'}
    ]

    const [select, setSelect] = useState('day');
    const [amount, setAmount] = useState('');

    useEffect(()=> {
        const calculate = () => {
            const isDay = select === 'day';
            const firstFruit = isDay ? Math.round(amount / 24, 10) : Math.round((amount / 24) / 8);
            const tithe = Math.round((amount - firstFruit) / 10);
            const total = firstFruit + tithe;
            setResult({
                firstFruit: firstFruit,
                tithe: tithe,
                total: total
            })
        }
        calculate();
    },[select,amount,setResult])

    const updateAmount = e => {
        if(e.target.value !== ''){
            let amount = parseInt(e.target.value);
            setAmount(amount);
        }else{
            setAmount('');
        }
    }

    return ( 
        <form>
            <h2>Agregar</h2>
            <div className='input-field col s12'>
                <select 
                    className="browser-default"
                    value={select}
                    onChange={e => setSelect(e.target.value)}
                >
                    {/* <option value="" disabled selected>Selecciona Primicia</option> */}
                    {options.map(({innerText,value}) => (
                        <option 
                        key={value}
                        value={value}
                        >
                            {innerText}
                        </option>
                    ))}
                </select>
            </div>

            <div className="input-field col s12 form">
                <i className="material-icons prefix">attach_money</i>
                <input 
                    type="number"
                    id='amount' 
                    value={amount}
                    onChange={updateAmount}
                />
                <label htmlFor='amount'>Ingrese Salario Mensual</label>
            </div>
            
            {/* <div className="input-field col s12"> 
                <input 
                    type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12 waves-button-wrapper" 
                    value="Calcular" 
                />
            </div> */}
        </form>
        
     );
}

Form.prototype = {
    setResult: ProTypes.func.isRequired
}
 
export default Form;
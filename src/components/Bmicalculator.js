import React, { useState } from 'react';

function Bmicalculator() {
    const [hight, setHight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const[error,setError]=useState('');

    function bmivalue() {
        if(isNaN(hight)||isNaN(weight)||hight<=0||weight<=0){
            setError('enter a height and weight in number')
            return;
        }

        const hmeter = hight / 100;
        setBmi((weight / (hmeter * hmeter)).toFixed(2));
        setError('')
        
    }

    function clearValues() {
        setHight('');
        setWeight('');
        setBmi('');
        
    }

    return (
        <div className='outerdiv bg-info'>
            <h1 className='m-5 head'>BMI calculater</h1>
            <div className='m-3'>
                <label className='h3 lable' htmlFor='hight'>Height (cm):</label>
                <input className='input' type="text" id='hight' value={hight} onChange={(e) => setHight(e.target.value)} />
            </div>
            <div className='m-3'>
                <label className='h3 lable' htmlFor='weight'>Weight (kg):</label>
                <input className='input ' type="text" id='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                {error && <p className='error'>{error}</p>}
            </div>
            <div className='m-4'>
                <button className='btn p-2 btn-dark m-2' onClick={bmivalue}>Calculate BMI</button>
                <button className='btn p-2 btn-dark m-2' onClick={clearValues}>Clear</button>
           
                {bmi && <p className='main m-3 p-2'>Your BMI is {bmi}</p>}
            </div>
        </div>
    );
}

export default Bmicalculator;

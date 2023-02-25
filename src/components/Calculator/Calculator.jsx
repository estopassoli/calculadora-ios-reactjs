import React, { useState } from 'react'
import Button from './../Buttons/Button';

const Calculator = (props) => {
    const [resultado, setResultado] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [subscript, setSubscript] = useState(false);
    const [lastOperator, setLastOperator] = useState(null)

    const setDecimal = (dec) => {
        var str = resultado.toString().includes(',')
        if (str) {
            return;
        } else {
            setResultado(resultado + dec)
        }
    }
    const Calculate = () => {

        const num1 = parseInt(number1);
        const num2 = parseInt(resultado);
        // eslint-disable-next-line default-case
        switch (lastOperator) {
            case '+':
                const sum = num1 + num2;
                setResultado(sum);
                break;
            case '-':
                const sub = num1 - num2;
                setResultado(sub);
                break;
            case 'x':
                const mult = num1 * num2;
                setResultado(mult)
                break;
            case '÷':
                const divide = num1 / num2;
                setResultado(divide)
                break;
            case '%':
                const percent = num1 / 100 * num2;
                setResultado(percent)
                break;
        }

    }
    const setNumber = (number) => {
        if (resultado === 0) {
            setResultado(number)
        } else {

            if (subscript) {
                setSubscript(false);
                setResultado(number)

            } else {
                const newNumber = resultado + number
                setResultado(newNumber)
            }
        }
    }



    const setOperator = (operator) => {
        // eslint-disable-next-line default-case
        switch (operator) {
            case 'AC':
                setNumber1(0)
                setLastOperator(null)
                setResultado(0)
                break;
            case '+/-':
                if (resultado > 0) {
                    setResultado('-' + resultado);
                } else if (resultado === 0) {
                    setSubscript(true)
                    Calculate()
                    return;
                } else if (resultado < 0) {
                    setResultado(resultado.replace('-', ''));
                }
                break;
            case '%':
                if (number1 !== 0) {
                    setSubscript(true)
                    Calculate()
                    return;
                } else {
                    setLastOperator('%')
                    setNumber1(resultado)
                    setSubscript(true);
                }
                break;
            case '÷':
                if (number1 !== 0) {
                    setSubscript(true)
                    Calculate()
                    return;
                } else {
                    setLastOperator('÷')
                    setNumber1(resultado)
                    setSubscript(true);
                }
                break;
            case 'x':
                if (number1 !== 0) {
                    setSubscript(true)
                    Calculate()
                    return;
                } else {
                    setLastOperator('x')
                    setNumber1(resultado)
                    setSubscript(true);
                }
                break;
            case '-':
                if (number1 !== 0) {
                    setSubscript(true)
                    Calculate()
                    return;
                } else {
                    setLastOperator('-')
                    setNumber1(resultado)
                    setSubscript(true);
                }
                break;
            case '+':
                if (number1 !== 0) {
                    setSubscript(true)
                    Calculate()
                } else {
                    setLastOperator('+')
                    setNumber1(resultado)
                    setSubscript(true);
                }
                break;
            case '=':
                Calculate()
                break;
        }
    }

    const theme = {
        'light': {
            backgroundColor: '#e5e5e5',
            color: '#000'
        }, 'dark': {
            backgroundColor: '#000',
            color: '#fff'
        }
    }
    return (
        <div className='calculator' style={theme[props.theme]}>
            <div className='display' style={theme[props.theme]}>
                <input className='result' value={resultado} disabled style={theme[props.theme]} />
            </div>

            <div className='buttons' style={theme[props.theme]}>
                <div className='row'>
                    <Button number='AC' class='gray' onClick={(e) => { setOperator(e.target.innerText) }} />
                    <Button number='+/-' class='gray' onClick={(e) => { setOperator(e.target.innerText) }} />
                    <Button number='%' class='gray' onClick={(e) => { setOperator(e.target.innerText) }} />
                    <Button number='÷' class='orange' onClick={(e) => { setOperator(e.target.innerText) }} />
                </div>
                <div className='row'>
                    <Button number='7' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='8' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='9' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='x' class='orange' onClick={(e) => { setOperator(e.target.innerText) }} />
                </div>
                <div className='row'>
                    <Button number='4' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='5' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='6' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='-' class='orange' onClick={(e) => { setOperator(e.target.innerText) }} />
                </div>
                <div className='row'>
                    <Button number='1' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='2' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='3' class='number' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number='+' class='orange' onClick={(e) => { setOperator(e.target.innerText) }} />
                </div>
                <div className='row'>
                    <Button number='0' class='number' width='170px' radius='40px' onClick={(e) => { setNumber(e.target.innerText) }} />
                    <Button number=',' class='number' onClick={(e) => { setDecimal(e.target.innerText) }} />
                    <Button number='=' class='orange' onClick={(e) => { setOperator(e.target.innerText) }} />
                </div>
            </div>
        </div>
    )
}

export default Calculator
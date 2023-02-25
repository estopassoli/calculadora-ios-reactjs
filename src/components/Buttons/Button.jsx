import React from 'react'

const Button = (props) => {

    const style = {
        cursor: 'pointer',
        fontSize: '32px',
        width: props.width ? props.width : '80px',
        height: '80px',
        borderRadius: props.radius ? props.radius : '100%',
        fontWeight: 'bold'
    }

    return (
        <button style={style} className={props.class} onClick={props.onClick}>{ props.number }</button>
        )
}

export default Button
import React from 'react'
import './Input.css'


interface InputProps{
    inputid:string
}
function Input(props: InputProps) {
    return (
        <div>
             <input className="num1" type="number" id={props.inputid} ></input>
        </div>
    )
}

export default Input

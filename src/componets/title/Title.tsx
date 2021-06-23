import React from 'react'
import './Title.css'

interface InputProps{
    text?: string;
    id?: string;
}
function Title(props: InputProps) {
    return (
        <div className="title">
            <h1>{props.text}</h1>
        </div>
    )
}

export default Title

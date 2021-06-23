import React from "react";
import './Botao.css'


interface ClickProps{
    clickid: React.MouseEventHandler<HTMLButtonElement>
}
function Botao(props: ClickProps){
    return(
        <div className="inutil">
             <button className="botao" onClick={props.clickid}>+</button>
        </div>
    );
}
export default Botao;
import React from 'react';
import {Botao} from '../button/style'

export default function Button(props, color, btnbackcolor, btnBorder,btnHover){
    return (
        <>
           <Botao btnBorder={`solid 1px ${props.btnBorder}`} btnHover={props.btnHover}  color={props.color}  btnbackcolor={props.btnbackcolor}>
                {props.Buscar}
            </Botao>
        </>
    )
}
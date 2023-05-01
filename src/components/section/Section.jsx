import React, {useState} from 'react';
import {Container_area, Section_img, Span} from './styled';
import Button from '../button/Button'


export default function Section(props, backcolor, imagem, color, btnbackcolor, btnBorder, titulo, paragrafo,  barraColor,  btnHover){
    return (
        <Container_area color={props.color} backcolor={props.backcolor}>
           <Section_img order={props.order}>
                <img src={props.imagem} alt="foto Clima perfeito" />
           </Section_img>
           <article>
                <div>
                    <div>
                        <Span  barraColor={props.barraColor}></Span> <h3>VIAGENS NACIONAIS</h3>
                    </div>
                    <h4 >
                        {props.titulo}
                    </h4>
                    <p>
                        {props.paragrafo}
                    </p>
                    <Button  btnHover={props.btnHover}  btnbackcolor={props.btnbackcolor} color={props.color} btnBorder={props.btnBorder} Buscar={'AGENDAR'}/>
                </div>
           </article>
        </Container_area>
    )
}
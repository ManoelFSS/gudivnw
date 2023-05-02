import React from 'react'
import {Section} from './styled'
import Button from '../button/Button'

export default function Contato(props,  btnHover,btnbackcolor,btnBorder, color,){
    return (
        <Section>
            <form action="#" method='post'>
                <fieldset>
                    <legend>Fale conosco</legend>
                    <input type="email" placeholder='Diga o seu melhor email' required/>
                    <input type="text" placeholder='Assunto' required/>
                    <textarea name="" id="" cols="30" rows="4" placeholder='Escreva a sua mensagem' required> 
                    </textarea>
                    <Button  btnHover={props.btnHover}  btnbackcolor={props.btnbackcolor} color={props.color} btnBorder={props.btnBorder} Buscar={'ENVIAR'} />
                </fieldset>
            </form>
        </Section>
    )
}
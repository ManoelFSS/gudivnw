import React, {useState} from 'react';
import {Section,SearchContainer} from './styled';
import Button from '../button/Button'


export default function Banner(props, btnbackcolor){
    return (
        <Section>
           <SearchContainer>
                <label>Para qual estado você deseja ir?</label>
                <input type="text" placeholder='Pesquisar' />
                <Button btnbackcolor={props.btnbackcolor}  btnBorder={'transparent'}  Buscar={'BUSCAR'} />
            </SearchContainer>
        </Section>
    )
}
    
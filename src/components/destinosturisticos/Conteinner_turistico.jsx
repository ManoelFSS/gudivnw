import React, {useState} from 'react'
import Rj from '../../assets/rio-de-janeiro.png'
import RioDasOstras from '../../assets/rio-das-ostras.png'
import CaldasNovas from '../../assets/caldas-nova.png'
import Amazonia from '../../assets/amazonia.png'
import BtnBlur from '../../components/button/BtnBlur'
import {Section} from './styled'


export default function Conteinner_turistico(){

    const pontosTuristicos = [
        {
            image:Rj,
            name:'RIO DE JANEIRO',
        },
        {
            image:RioDasOstras,
            name:'RIO DAS OSTRAS',
        },
        {
            image:CaldasNovas,
            name:'CALDAS NOVAS',
        },
        {
            image:Amazonia,
            name:'AMAZÔNIA',
        }

    ]

  

    return (
        <Section>
            {pontosTuristicos.map((item, index)=>(
                <figure key={index}>
                    <img src={item.image} alt={item.name} />
                    <BtnBlur nome={item.name}/>
                </figure>
            ))}
        </Section>
    )
}
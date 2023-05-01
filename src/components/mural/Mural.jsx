import React, {useState} from "react";
import {ContennerMural,Figure} from './styled'
import Mural01 from '../../assets/mural01.png'
import Mural02 from '../../assets/mural02.png'
import Mural03 from '../../assets/mural03.png'
import Mural04 from '../../assets/mural04.png'
import Mural05 from '../../assets/mural05.png'
import Mural06 from '../../assets/mural06.png'

import Mapa from '../../assets/mapa-de-lugares.png'
import Lugares from '../../assets/lugares.png'
import Turisticos from '../../assets/ponto-turisticos.png'
import Restaurantes from '../../assets/restaurantes.png'

export default function Mural(){

    const muralDeFotos = [
        {image: Mural01},
        {image: Mural02},
        {image: Mural03},
        {image: Mural04},
        {image: Mural05},
        {image: Mural06},
    ]

    const categorias = [
        {
            image: Mapa,
            name: 'O melhor do Brasil',
            cor:'#EEEEEE',
            textColor:'#005BD5'
        },
        {
            image: Lugares,
            name: 'Cidades mais frequentadas',
            cor:'#005BD5',
            textColor:'#fff'
        },
        {
            image: Turisticos,
            name: 'Pontos turísticos',
            cor:'#EEEEEE',
            textColor:'#005BD5'
        },
        {
            image: Restaurantes,
            name: 'Restaurantes',
            cor:'#005BD5',
            textColor:'#fff'
        },
    ]

    return (
        <ContennerMural>
            <div>
                <h4>use a hashtag #brasilisverigudi</h4>
                <h2>Nosso mural de Experiências</h2>
            </div>
            <article>
                {muralDeFotos.map((item, index)=>(
                    <figure key={index}>
                        <img src={item.image} alt="fotos da galeria" />
                    </figure>
                ))}
            </article>
            <section>
                 {categorias.map((item, index)=>(
                    <Figure textColor={item.textColor} color={item.cor} key={index} >
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </Figure>
                ))} 
            </section>
        </ContennerMural>
    )
}
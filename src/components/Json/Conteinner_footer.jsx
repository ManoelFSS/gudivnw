import React, {useEffect} from "react";
import {Section} from './styled'


export default function Conteinner_footer(){


    const JsonText = [
        {
            title: '',
            text01:'Sobre nós',
            text02:'Mural de memórias',
            text03:'Eventos Gudi',
            text04:'Nosso blog',
        },
        {
            title: 'Contato',
            text01:'Chat Virtual',
            text02:'SAC Online',
            text03:'Ouvidoria',
            text04:'FAQ',
        },
        {
            title: 'Benefícios',
            text01:'Conta digital Gudi',
            text02:'Viaje com Milhas',
            text03:'C6 Átomos',
            text04:'iD Jovem',
        },
        {
            title: 'Lugares',
            text01:'O melhor do Brasil',
            text02:'Cidades frequentes',
            text03:'Pontos turísticos',
            text04:'Restaurantes',
        },
        {
            title: 'Curiosidades',
            text01:'Cultura e tradições',
            text02:'Pratos típicos',
            text03:'Mitos brasileiros',
            text04:'Carnaval',
        },
     
    ]

    useEffect(()=>{
        let h3 = document.querySelectorAll('section div h3');
            h3[0].classList.add('h3')
    })
    

    return (
        <Section>
            {JsonText.map((item, index)=>(
                <div key={index}>
                    <h3>{item.title}</h3>
                    <ul>
                        <li>{item.text01}</li>
                        <li>{item.text02}</li>
                        <li>{item.text03}</li>
                        <li>{item.text04}</li>
                    </ul>
                </div>
            ))}
        </Section>
    )
}
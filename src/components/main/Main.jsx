import React, {useState} from 'react';
import Section from '../section/Section';
import Climaperfeito from "../../assets/climaperfeito.png"
import Ranchandovaber from "../../assets/ranchandovaber.png"
import Caldas from "../../assets/caldas.png"
import Conteinner_turistico from '../destinosturisticos/Conteinner_turistico';
import Mural from '../mural/Mural'
import {Container} from './styled'




export default function Main(){
    return (
        <Container>
           <Section 
                color={'#fff'} 
                backcolor={'linear-gradient(180deg, #005BD5, #002E6B)'} 
                imagem={Climaperfeito}
                btnbackcolor={'transparent'}
                btnBorder={'#fff'}
                barraColor={'#fff'}
                btnHover={'#002E6B'}
                titulo={'O clima perfeito, no lugar perfeito'}
                paragrafo={' Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.'}
            />
           <Section 
                order={'1'} 
                color={'#005BD5'} 
                backcolor={'#fff'} 
                imagem={Ranchandovaber}
                btnbackcolor={'#fff'}
                btnBorder={'#005BD5'}
                barraColor={'#005BD5'}
                btnHover={'#002E6B'}
                titulo={'Curta uma nova vibe entre amigos'}
                paragrafo={' Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.'}
            />
            
             <Section 
                color={'#fff'} 
                backcolor={'linear-gradient(180deg, #005BD5, #002E6B)'} 
                imagem={Caldas}
                btnbackcolor={'transparent'}
                btnBorder={'#fff'}
                barraColor={'#fff'}
                btnHover={'#002E6B'}
                titulo={'Algumas experiências são inexplicáveis'}
                paragrafo={'Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.'}
            />
            <Conteinner_turistico />
            <Mural/>
        </Container>
    )
}
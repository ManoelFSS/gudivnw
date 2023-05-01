import  React, {useState} from "react"
import {Headers} from "./styled"
import Logo from "../../assets/logo.png"

export default function Header(){

    const [menuAtivo, setMenuAtivo] = useState('Agendar')
   

    return (
        <Headers>
            <h1><img src={Logo} alt="logo tipo, gudi o bom da vida é viver !" /></h1>
            <nav>
                <ul>
                    <li className={ menuAtivo === 'Sobre' ? 'ativo' : ''}  onClick={()=> setMenuAtivo('Sobre')}>
                        Sobre
                    </li>
                    <li className={ menuAtivo === 'Benefícios' ? 'ativo' : ''}  onClick={()=> setMenuAtivo('Benefícios')}>
                        Benefícios
                    </li>
                    <li className={ menuAtivo === 'Contato' ? 'ativo' : ''}  onClick={()=> setMenuAtivo('Contato')}>
                        Contato
                    </li>
                    <li className={ menuAtivo === 'Agendar' ? 'ativo' : ''}  onClick={()=> setMenuAtivo('Agendar')}>
                        Agendar
                    </li>
                </ul>
            </nav>
        </Headers>
    )
}
import  React, {useState} from "react"
import {Headers, Div, Nav} from "./styled"
import Logo from "../../assets/logo.png"
import MenuFechado from "../../assets/MenuFechado.png"
import MenuAberto from "../../assets/MenuAberto.jpeg"

export default function Header(){

    const [menuAtivo, setMenuAtivo] = useState('Agendar')
    const [menuBrirFecha, setmenuBrirFecha] = useState('-210px')
    const [menuImg, setmenuImg] = useState(MenuFechado)
  

    const handleScrollToPosition = () => {
        window.scrollTo({
          top:4000, 
          behavior: "smooth" 
        });
    };
    

    return (
        <>
        <Headers>
            <h1><img src={Logo} alt="logo tipo, gudi o bom da vida é viver !" /></h1>
            <Nav menuBrirFecha={menuBrirFecha}>
                <ul>
                    <li className={ menuAtivo === 'Sobre' ? 'ativo' : ''}  onClick={()=> `  ${setMenuAtivo('Sobre')}  ${setmenuBrirFecha('-210px')} ${setmenuImg(MenuFechado)} `}>
                        Sobre
                    </li>
                    <li className={ menuAtivo === 'Benefícios' ? 'ativo' : ''}  onClick={()=> `  ${setMenuAtivo('Benefícios')}  ${setmenuBrirFecha('-210px')} ${setmenuImg(MenuFechado)} `}>
                        Benefícios
                    </li>
                    <li className={ menuAtivo === 'Contato' ? 'ativo' : ''}  onClick={()=> ` ${handleScrollToPosition()}   ${setMenuAtivo('Contato')}  ${setmenuBrirFecha('-210px')} ${setmenuImg(MenuFechado)}`}>
                        Contato
                    </li>
                    <li className={ menuAtivo === 'Agendar' ? 'ativo' : ''}  onClick={()=> `  ${setMenuAtivo('Agendar')}  ${setmenuBrirFecha('-210px')} ${setmenuImg(MenuFechado)}`}>
                        Agendar
                    </li>
                </ul>
            </Nav>
            <Div onClick={()=> menuBrirFecha === '0px' ? ` ${setmenuImg(MenuFechado)}  ${setmenuBrirFecha('-210px')} ` :  ` ${setmenuImg(MenuAberto)}  ${setmenuBrirFecha('0px')} ` }>
                <img src={menuImg} alt="icone menu" />
            </Div>
        </Headers>
       </>
    )
}
import styled from 'styled-components'



export const Headers = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    min-height: 10vh;
    width: 100%;
    background-color: #fff;
    padding: 0px 40px;
    position: fixed;
    cursor: pointer;

    h1{
        display: flex;
        height: 8vh;
        align-items: center;
    }

    img{
        height: 5vh;
  
    }

    ul{
        display: flex;
        list-style: none;
        gap: 10px;
        color:#005BD5;
        min-height: 8vh;
        align-items: center;

    }
    
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 20px;
        width: 160px;
        height: 5vh;
        font-size: clamp(1vw,2vw + 2vw,1em);
        font-weight:bold;
        transition: all 0.3s;
        border-radius: 20px;
    }

    li:hover, .ativo {
        background-color: #005BD5;
        color: #fff;
        border-radius: 15px;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-radius: 20px;
    }
  
`;

export const Nav = styled.nav`
    @media(max-width:930px){

        display:flex ;
        position: absolute;
        justify-content: center;
        width: 200px;
        height: 100vh;
        right: ${props=> props.menuBrirFecha};
        top: 0px;
        padding-top: 14vh;
        background-color: #ffffff;
        box-shadow: -1px 0px 15px #000000b3;
        border-radius: 20px 0px 0px 15px;
        z-index: 1;
        transition: all 0.4s 0.2s;
 
        ul{
            display: block;
        }
    }
`;

export const Div = styled.div`
    height: 5vh;
    width: 5vh;
    right: 10px;
    border-radius: 50%;
    z-index: 2;
    position: absolute;

    img{
        width: 100%;
        height: 100%;
    }
`;
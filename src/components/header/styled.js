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
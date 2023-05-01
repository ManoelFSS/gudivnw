import styled from 'styled-components';

export const Botao = styled.button`

    width: 120px;
    min-height: 30px;
    border-radius: 15px;
    border: ${(props)=> props.btnBorder};
    color: ${(props)=> props.color || '#fff'};
    background: ${(props)=> props.btnbackcolor ||'#005BD5'};
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    transition:all 0.3s;
    user-select: none;
    outline:none;

    &:hover{
        background-color:${(props)=> props.btnHover || '#002E6B'};
        color: #fff;
    }
`;

export const Botao_blur = styled.button`

    border-radius: 15px;
    border: ${(props)=> props.btnBorder};
    color: ${(props)=> props.color || '#000'};
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    transition:all 0.3s;
    padding: 10px 20px;
    user-select: none;
    outline:none;
    

    &:hover{
       transform: scale(1.0.5);
    }
`;

export const Btn = styled.button`
    padding: 10px 25px;
    border-radius: 20px;
    color: red;
    position: absolute;
    z-index: 2;
    word-spacing: 5px;
    letter-spacing: 3px;
    border: solid 1px #fff;
    color: #fff;
    font-weight: bold;
    background-color:#69686860;
    backdrop-filter: blur(24px);
    font-size: clamp(1vw,1.3vw + 2vw,0.5em);
    transition: all 0.3s;
    cursor: pointer;
    user-select: none;
    outline:none;

    &:hover{
        transform: scale(1.04);
    }

    @media(max-width:767px){
            font-size: clamp(1vw,1.3vw + 2vw,0.6em);
    }
`;
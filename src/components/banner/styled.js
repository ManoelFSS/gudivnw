
import styled from 'styled-components';
import LogoBanner from '../../assets/banner.png'
import Areia from '../../assets/areia.png'

export const Section = styled.section`
    background: url(${LogoBanner}) no-repeat center / cover;
    height:100vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left:40px;

    @media(max-width:500px){
        background: url(${LogoBanner}) no-repeat top / 170% 50% ,
        url(${Areia}) no-repeat center center / cover;
        align-items:flex-end;
        padding-bottom: 35px;
        padding-left:0px;
    }
`;

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 45vh;
    width:450px ;
    gap: 50px;
   

    label{
        color: #005BD5;
        font-size: clamp(2vw,3vw + 2vw,3.2em);
        font-weight: bold;
        line-height: 55px;
       
    }
    input {
        width: 85%;
        height: 40px;
        border-radius: 15px;
        border: none;
        padding: 10px 20px;
    }

    @media(max-width:590px){
        align-items: center;
        min-width:300px ;
      
    
        label{
        font-size: clamp(2.5vw,4vw + 5vw,3.7em);
        text-align: center;
      }
    }

    @media(max-width:400px){
        label{
            line-height:35px;
            font-size: clamp(3vw,6vw + 5vw,3em);
            
      }
    }

`;
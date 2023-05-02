import styled from "styled-components";
import Logo from '../../assets/logo.png'

export const Section = styled.section`
    width: 100%;
    padding: 30px;
    background-color:#fff ;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    gap: 10px;


    h3{
       display: flex;
       align-items: center;
       min-width: 140px;
       min-height: 4vh;
       width: 150px;
       margin-bottom: 10px;
   }

   .h3{
       background: url(${Logo}) no-repeat center /100%;
       padding: 20px;
    }
    
    div{
     
        min-width: 240px;
        height: 160px;
        color: #005BD5;
        padding: 20px 50px;
    
        ul{
            width: 100%;
            list-style: none;
          
           li{
              font-family:Argentum-Regular;
              font-size: clamp(1vw,1.4vw + 2vw,1em);
              line-height:20px;
              cursor: pointer;
              &:hover{
                color: #00a2ff;
              }
           }
        }

    }


    @media(max-width:530px){
        div{

          padding: 20px 20px;
        }

        min-width: 200px;
    
    }
    @media(max-width:420px){
        div{
            ul{
                li{
                    font-size: clamp(1vw,3vw + 2vw,1.5em);
                    line-height:20px;
                }
            }
           
        }
       
    }
`;
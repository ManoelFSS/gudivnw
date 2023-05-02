import styled from "styled-components";
import Logo from '../../assets/logo.png'

export const Section = styled.section`
    width: 95%;
    padding: 30px;
    background-color:#fff ;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
  


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
        
        max-width:20%;
        min-width: 240px;
        height: 200px;
        color: #005BD5;
        padding: 20px 50px;
      
    
        ul{
            width: 100%;
            list-style: none;
          
           li{
              font-family:Argentum-Regular;
              font-size: 14px;
              line-height:20px;
              cursor: pointer;
              &:hover{
                color: #00a2ff;
              }
           }
        }

    }


    @media(max-width:570px){
        width: 100%;
        justify-content:space-between;
        padding:0px;
        div{
            max-width:10%;
            min-width: 180px;
            padding: 20px 20px;
        }

        
    
    }
    @media(max-width:420px){
        div{
            ul{
                li{
                    line-height:25px;
                }
            }
           
        }
       
    }

    @media(max-width:362px){
        div{
            min-width: 170px;
            padding: 10px 10px;
            ul{
                li{
                  
                    line-height:30px;
                }
            }
           
        }
       
    }
    @media(max-width:340px){
        justify-content: center;
        div{ 
            padding: 10px 10px;
            min-width: 270px;
            ul{
                li{
                    font-size: 18px;
                    line-height:30px;
                }
            }
           
        }
       
    }

`;
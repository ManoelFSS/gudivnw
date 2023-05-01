import styled from "styled-components";

export const ContennerMural = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0px;

        h4{
            color:#8B8B8B ;
            font-size: 16px;
            font-family: Argentum-Regular;
        }
        h2{
            width: 300px;
            font-size: clamp(1vw,2vw + 2vw,2.2em);
            color:#8B8B8B ;
            text-align: center;
        }
        @media(max-width:488px){
            h2{
                font-size: clamp(2vw,4vw + 3vw,3.6em);
            }
        }
    }

    article {
        display: flex;
        flex-wrap: wrap;
        max-width: 60%;
        gap: 15px;
        align-items: center;
        justify-content: center;

        figure{
            
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32%;
            transition: all 0.3s;

            img{
                width: 100%;
                height: 100%;
            }

            @media(max-width:763px){
                min-width:48%;
            }

            @media(max-width:630px){
                min-width:46%;
            }

            @media(max-width:318px){
                min-width:100%;
            }

            &:hover{
                    transform: scale(1.1);
            }
        }

        @media(max-width:504px){
            min-width:90%;
        }

    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 50px 0px;
        width: 60%;
        justify-content: center;

        @media(max-width:504px){
            min-width:90%;
        }
       
    }
  
    
`;

export const Figure = styled.figure`

    display: flex;
    flex: 1;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    width: 22.8%;
    height: 200px;
    position: relative;
    text-align: center;
    background-color: ${props=> props.color};
    color: ${props=> props.textColor};
    padding:0px 10px ;
    transition: all 0.3s;

    p{
        width: 120px;
    }

    
    img{
            width: 45%;
            height: 45%;
        }

        @media(max-width:1075px){
            min-width:34.5%;
        }

    
        @media(max-width:630px){
            min-width:46%;
        }

        @media(max-width:504px){
            min-width:40%;
        }

        &:hover{
                transform: scale(1.1);
        }
`;
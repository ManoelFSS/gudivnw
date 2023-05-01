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
        gap: 24px;
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


    
    img{
            width: 40%;
            height: 40%;
        }

        @media(max-width:956px){
            min-width:32%;
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
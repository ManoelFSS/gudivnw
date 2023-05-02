import styled from 'styled-components'

export const Container_area = styled.main`
    display: flex;
    flex-wrap:wrap;
    background-image:${props=> props.backcolor};
    min-height: 50vh;
    width: 100%;
    color: ${props=> props.color};
    

    article{
        flex: 1;
        width: 50%;
        min-height: 50vh;
        min-width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
       

        div:nth-child(1){
            width: 82%;
            
            h4{
                font-size: clamp(1vw,2vw + 2vw,3em);
            }

            p{
                letter-spacing:2px;
                line-height:20px;
                font-size:14px;
                padding: 5px 0px;
                font-family:Argentum-Regular;
                
            }

            button{
                margin-top:15px;
            }


        }

        
        @media(max-width:695px){
            
            div:nth-child(1){
                h4{
                     font-size: clamp(1vw,2vw + 1.5vw,2em);
                }

                p{
                    font-size:12px;
                }

                button{
                margin-top:5px;
                }

            }

        }

        @media(max-width:599px){
          
            div:nth-child(1){
               
                h4{
                     font-size: clamp(2vw,3vw + 5vw,3em);
                }

                button{
                    margin-top:10px;
                    position: absolute;
                    left: 50%;
                    right: 50%;
                    transform: translate(-50%);
                    z-index: 1;
                }

            }

        }
        @media(max-width:375px){
        div div:nth-child(1){

            margin-top:-59px;
            
        }

    }

    }


    div div:nth-child(1){
        display: flex;
        align-items: center;
        width: 100%;
        height: 5vh;
        gap: 20px;
       

        h3{
            font-size: 10px;
            letter-spacing:3px;
            font-weight: 500;
            
        }


    }
  

`;

export const Span = styled.span`
     
    width: 50px;
    height: 2px;
    background-color: ${props=> props.barraColor};

`;

export const Section_img = styled.section`
    flex: 1;
    width: 50%;
    min-height: 50vh;
    min-width: 300px;
    order: ${props=> props.order};


    img{
        width: 100%;
        height:100%;
    }
`;
    

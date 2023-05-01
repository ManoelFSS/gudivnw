import styled from "styled-components";

export const Section = styled.section`
    min-height: 60vh;
    width: 100%;
    background-color: #005BD5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
    form{
        width: 530px;
        min-width: 300px;
       
     

        fieldset{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            border: none;
            padding: 10px;
            legend{
                text-align: center;
                font-size: 2.4em;
                color: #fff;
                
            }
        }
        input{
            width: 90%;
            height: 40px;
            border-radius: 20px;
            margin-bottom: 10px;
            padding: 0px 20px;
            border: none;
            font-family:Argentum-Regular;
        }

        input::placeholder{
            color: #AFB3B8;
            font-family:Argentum-Regular;
        }
        textarea{
            width: 90%;
            border-radius: 20px;
            height: 10vh;
            padding: 10px;
            border: none;
            margin-bottom: 20px;
            font-family:Argentum-Regular;
        }

        textarea::placeholder{
            color: #AFB3B8;
            font-family:Argentum-Regular;
        }

        button{
            border: solid 1px #fff;
            font-family:Argentum-Regular;
            font-size: 12px;
        }

     
        
    
    }
`;


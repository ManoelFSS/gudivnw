import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 35vh;
    display: flex;
    flex-wrap:wrap;

    figure {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;


        img{
            width: 100%;
            height: 100%;
        }

        @media(max-width:767px){
            min-width:50%;
        }
        @media(max-width:430px){
            min-width:100%;
        }
    }
`;
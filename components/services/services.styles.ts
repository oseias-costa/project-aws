import { styled } from "styled-components";

export const ServicesContainer = styled.section`
    padding-top: 53px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Subtitle = styled.h2`
    color: #F87C18;
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    padding-bottom: 60px;
`

export const ServicesItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(max-width: 740px){
        text-align: center;
    }
`

export const ServiceItem = styled.div`
    margin: 20px;

    h3 {
        font-weight: 500;
        font-size: 24px;
        padding-top: 15px;
        color: #5c6a7f;
    }

    p {
        max-width: 250px;
        color: #2a2a2a;
        color: #5c6a7f;
        font-size: 14px;
    }

    @media(max-width: 740px){
        p {
            max-width: 100%;
        }
    }
`
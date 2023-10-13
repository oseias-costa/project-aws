"use client";
import { styled } from "styled-components";


export const Container = styled.section`
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 40px;
    border-bottom: 2px solid #F87C18;
    margin-bottom: 50px;

    h2 {
        color: #5C6A7F;
        font-size: 42px;
        font-weight: 300;
        margin: 0;
        padding-bottom: 15px;
    }

    @media(max-width: 740px){
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const TitleContainer = styled.div`
    border-bottom: 2px solid #F87C18;
`

export const Title = styled.h1`
    color: #38ACA8;
    text-align: center;
    font-weight: 400;
    font-size: 36px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const LinksPage = styled.div`
    display: flex;
    padding-top: 20px;
    align-items: center;

    p {
        padding-left: 10px;
        padding-right: 10px;
        color: #F87C18;

    font-size: 14px;
    }
`

export const Link = styled.a`
    color: #F87C18;
    text-decoration: none;
    display: inline;
    font-size: 14px;
`

export const Contact = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 740px){
        flex-direction: column;
    }
`

export const ContactRight = styled.div`
    @media(max-width: 740px){
        margin-bottom: 40px;
    }
`

export const ContactLeft = styled.div`
`

export const ContactContainer = styled.div`
    display: flex;
    justify-content: end;

    strong, p {
        color: #5C6A7F;
        margin: 0;
        font-size: 16px;
    }

    a {
        color: #F87C18;
        margin: 0;
        text-decoration: none;
        transition: .2s linear;
        padding-left: 5px;

        &:hover{
            color: #38ACA8;
        }
    
    }
    @media(max-width: 740px) {
        justify-content: start;
    }
`

export const ItemWithDescriptionContainer = styled.div`
    h3 {
        font-size: 22px;
        font-weight: 500;
        position: relative;
        top: 8px;
    }
    
    h3, p {
        color: #5C6A7F;
    }
`

export const ProfissionalExperienceContainer = styled.div`
    h3 {
        font-size: 22px;
        font-weight: 500;
        color: #5C6A7F;
        position: relative;
        top: 12px;
    }

`

export const ExperienceItem = styled.div`
    h4 {
        position: relative;
        top: 10px;
        font-weight: 500;
        font-size: 17px;
    }

    h4, p {
        color: #5C6A7F;
    }

    p {
        font-weight: 400;
    }
`

export const CertificatesContainer = styled.div`
      h3 {
        font-size: 22px;
        font-weight: 500;
        position: relative;
        top: 8px;
        color: #5C6A7F;
    }

    p {
        margin: 0;
        margin-bottom: 5px;
        color: #5C6A7F;
    }
`

export const ButtonDownload = styled.a`
  background: linear-gradient(90deg, #f98615 29.31%, #fea808 77.26%);
  border-radius: 500px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  transition: 0.2s linear;
  text-decoration: none;

  box-shadow:
    rgba(158, 159, 175, 0.25) 0px 1px 2px,
    rgba(158, 159, 175, 0.25) 0px 2px 4px,
    rgba(158, 159, 175, 0.25) 0px 4px 8px,
    rgba(158, 159, 175, 0.25) 0px 8px 16px,
    rgba(158, 159, 175, 0.25) 0px 16px 32px,
    rgba(158, 159, 175, 0.25) 0px 32px 64px;

  &:hover {
    box-shadow:
      rgba(249, 134, 21, 0.25) 0px 1px 2px,
      rgba(249, 134, 21, 0.25) 0px 2px 4px,
      rgba(249, 134, 21, 0.25) 0px 4px 8px,
      rgba(249, 134, 21, 0.25) 0px 8px 16px,
      rgba(249, 134, 21, 0.25) 0px 16px 32px,
      rgba(249, 134, 21, 0.25) 0px 32px 64px;
  }
`;
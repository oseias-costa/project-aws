import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    border-top: 2px solid #f87c18;
    padding-top: 25px;
    padding-bottom: 15px;
    max-width: 850px;
    margin: 0 auto;
    flex-wrap: wrap;
`
export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;
`
export const LinkMenu = styled.a`
  cursor: pointer;
  color: #5c6a7f;
  font-weight: 500;
  font-size: 16px;
  transition: 0.2s linear;
  text-decoration: none;
  padding-bottom: 5px;

  &:hover {
    color: #f87c18;
  }
`

export const Adjust = styled.div`
    @media(max-width: 740px){
        display: none;
    }
`

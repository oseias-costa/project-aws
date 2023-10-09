import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  width: 400px;
`;

export const LinkMenu = styled.a`
  padding-right: 35px;
  cursor: pointer;
  color: #5c6a7f;
  font-weight: 500;
  font-size: 16px;
  transition: 0.2s linear;
  text-decoration: none;

  &:hover {
    color: #f87c18;
  }
`;

export const RightHeader = styled.div`
  background-color: transparent;
  width: 400px;

  @media (max-width: 818px) {
    display: none;
  }
`;

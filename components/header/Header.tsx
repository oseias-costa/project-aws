"use client";
import { Container, Menu, LinkMenu, RightHeader } from "./header.styles";

export default function Header() {
  return (
    <Container>
      <Menu>
        <LinkMenu href="#Equipe">Equipe</LinkMenu>
        <LinkMenu>Projeto</LinkMenu>
        <LinkMenu href="#Mentor">Mentor</LinkMenu>
        <LinkMenu href="#Professor">Professor</LinkMenu>
      </Menu>
      <RightHeader />
    </Container>
  );
}

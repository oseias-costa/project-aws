"use client";
import { Container, Menu, LinkMenu, RightHeader } from "./header.styles";

export default function Header() {
  return (
    <Container>
      <Menu>
        <LinkMenu>Equipe</LinkMenu>
        <LinkMenu>Projeto</LinkMenu>
        <LinkMenu>Mentor</LinkMenu>
        <LinkMenu>Professor</LinkMenu>
      </Menu>
      <RightHeader />
    </Container>
  );
}

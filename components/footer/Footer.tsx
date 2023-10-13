"use client";
import Image from "next/image";
import { FooterContainer, MenuFooter, LinkMenu, Adjust } from "./footer.styles";
import Logo from "../../public/img/home/nuvem.svg";

export default function Footer(){
    return(
        <FooterContainer>
            <Image src={Logo} width={60} alt='' />
            <MenuFooter>
                <LinkMenu href="#">Início</LinkMenu>
                <LinkMenu href="#Serviços">Serviços</LinkMenu>
                <LinkMenu href="#Equipe">Equipe</LinkMenu>
            </MenuFooter>
            <Adjust />
        </FooterContainer>
    )
}
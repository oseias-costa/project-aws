"use client";
import Image from "next/image";
import Description from "./Description";
import { Container } from "./headline.styles";
import Img from "../../public/img/home/headline-img.png";

export default function Headline() {
  return (
    <Container>
      <Description />
      <Image
        quality={100}
        src={Img}
        width={400}
        alt="Imagem Servidores na Nuvem"
      />
    </Container>
  );
}

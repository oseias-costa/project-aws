"use client";
import { StaticImageData } from "next/image";
import * as S from "./team.styles";

export default function Member({name, img} : {name: string, img: StaticImageData}) {
  return  (
    <S.ContainerCart>
      <S.Img src={img} alt={`Membro do grupo: ${name}`} />
      <S.Name>{name}</S.Name>
      <S.ButtonLink>ver currículo</S.ButtonLink>
    </S.ContainerCart>);
}

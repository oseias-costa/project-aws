"use client";
import { StaticImageData } from "next/image";
import * as S from "./team.styles";

export default function Member({
  name,
  img,
  link,
}: {
  name: string;
  img: StaticImageData;
  link: string;
}) {
  return (
    <S.ContainerCart>
      <S.Img src={img} alt={`Membro do grupo: ${name}`} />
      <S.Name>{name}</S.Name>
      <S.ButtonLink href={`curriculo/${link}`}>ver currículo</S.ButtonLink>
    </S.ContainerCart>
  );
}

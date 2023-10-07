"use client";
import Link from "next/link";
import Member from "./Member";
import * as S from "./team.styles";
import { dataTeam } from "./_dataTeam";

export default function Team() {
  const membersCard = dataTeam.map(item => {
    return(
      <S.LinkMember href={`curriculo/${item.link}`} key={item.id}>
        <Member name={item.name} img={item.img} />
      </S.LinkMember>
    )
  })

  return (
    <S.Container>
      <S.Title>Equipe</S.Title>
      <S.TeamMembers>
        <>
        {membersCard}
        </>
      </S.TeamMembers>
    </S.Container>
  );
}

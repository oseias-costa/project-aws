"use client";
import Member from "./Member";
import * as S from "./team.styles";
import { dataTeam } from "./_dataTeam";

export default function Team() {
  const membersCard = dataTeam.map(item => {
    return(
      // <S.LinkMember href={`curriculo/${item.link}`} >
        <Member key={item.id} name={item.name} img={item.img} link={item.link} />
      // </S.LinkMember>
    )
  })

  return (
    <S.Container id="Equipe">
      <S.Title>Equipe</S.Title>
      <S.TeamMembers>
        <>
        {membersCard}
        </>
      </S.TeamMembers>
    </S.Container>
  );
}

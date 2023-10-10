"use client";
import * as S from "./teacher.styles";
import Photo from "../../public/img/home/louise.png";

export default function Teacher() {
  return (
    <S.MentorContainer id='Professor'>
      <S.Img src={Photo} alt="Louise Carmo" />
      <S.Description>
        <h3>Professora</h3>
        <h4>Louise Carmo</h4>
        <S.Skills>Cloud/AWS</S.Skills>
        <S.DescriptionText>
          Arquiteto de Soluções AWS e profissional experiente em TI com 15+ anos
          de carreira. Certificações ativas em PMP e CSM. Expert em
          gerenciamento de projetos preditivos e ágeis em empresas
          multinacionais. Habilidades em Product Owner e Scrum Master,
          ferramentas como Ms Project e Jira. Amplo conhecimento em segurança da
          informação, governança corporativa, COBIT5 e ITIL 3. Liderou projetos
          globais de conformidade com Sarbanes-Oxley e implementou escritórios
          de projetos híbridos em startups.
        </S.DescriptionText>
      </S.Description>
    </S.MentorContainer>
  );
}

"use client";
import * as S from "./mentor.style";
import Photo from "../../public/img/home/daniel-vargas.png";

export default function Mentor() {
  return (
    <S.MentorContainer id='Mentor'>
      <S.Img src={Photo} alt="Daniel Vargas Roque" />
      <S.Description>
        <h3>Mentor</h3>
        <h4>Daniel Vargas Roque</h4>
        <S.Skills>
          SENIOR DEVELOPER ANALYST | AWS Certified | DEVOPS | TERRAFORM | DOCKER
          | IAC
        </S.Skills>
        <S.DescriptionText>
          Desenvolvimento de APIs de controle de dispositivos usando C++.
          Recentemente, interessado pelo campo da Nuvem, especialmente AWS e
          Azure. Tornou-se um entusiasta na área de DevOps Multicloud.
          Certificado AWS Cloud Practitioner.
        </S.DescriptionText>
      </S.Description>
    </S.MentorContainer>
  );
}

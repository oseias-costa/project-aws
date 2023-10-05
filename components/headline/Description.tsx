import * as S from "./headline.styles";
import { headelineData } from "./_data";

export default function Description() {
  return (
    <S.DescriptionContainer>
      <S.Subtitle>{headelineData.subtitle}</S.Subtitle>
      <S.Title>{headelineData.title}</S.Title>
      <S.DescriptionText>{headelineData.description}</S.DescriptionText>
      <S.ButtonHeadline>ver equipe</S.ButtonHeadline>
    </S.DescriptionContainer>
  );
}

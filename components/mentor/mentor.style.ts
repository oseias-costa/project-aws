import styled from "styled-components";
import Image from "next/image";

export const MentorContainer = styled.section`
  padding-top: 73px;
  display: flex;
  justify-content: center;
`;

export const Description = styled.div`
  max-width: 400px;
  padding-left: 50px;

  h3 {
    color: #38aca8;
    font-size: 32px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    padding-bottom: 30px;
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #2a2a2a;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const Skills = styled.p`
  color: #5f6271;
  font-weight: 400;
  font-size: 13px;
  position: relative;
  bottom: 10px;
`;

export const DescriptionText = styled.p`
  color: #2a2a2a;
  font-size: 14px;
  font-weight: 400;
`;

export const Img = styled(Image)`
  width: 110px;
  height: 110px;
  position: relative;
  top: 70px;
`;

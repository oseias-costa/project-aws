import styled from "styled-components";
import Image from "next/image";

export const MentorContainer = styled.section`
  padding-top: 73px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media(max-width: 740px) {
    justify-content: start;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Description = styled.div`
  max-width: 500px;
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

  
  @media(max-width: 740px){
    max-width: 100%;
    padding-left: 0px;

    h3 {
      position: relative;
      bottom: 110px;
    }
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
  top: 60px;

  @media(max-width: 740px){
    
  }
`;

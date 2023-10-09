import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  padding-bottom: 20px;
`;

export const DescriptionContainer = styled.div`
  max-width: 400px;
`;
export const Subtitle = styled.p`
  color: #9c9ca7;
  position: relative;
  top: 30px;
  font-weight: 400;
`;

export const Title = styled.h1`
  color: #38aca8;
  font-weight: 400;
  font-size: 42px;
`;

export const DescriptionText = styled.p`
  color: #5c6a7f;
  padding-bottom: 10px;
`;

export const ButtonHeadline = styled.a`
  background: linear-gradient(90deg, #f98615 29.31%, #fea808 77.26%);
  border-radius: 500px;
  margin-top: 25px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  transition: 0.2s linear;
  box-shadow:
    rgba(158, 159, 175, 0.25) 0px 1px 2px,
    rgba(158, 159, 175, 0.25) 0px 2px 4px,
    rgba(158, 159, 175, 0.25) 0px 4px 8px,
    rgba(158, 159, 175, 0.25) 0px 8px 16px,
    rgba(158, 159, 175, 0.25) 0px 16px 32px,
    rgba(158, 159, 175, 0.25) 0px 32px 64px;

  &:hover {
    box-shadow:
      rgba(249, 134, 21, 0.25) 0px 1px 2px,
      rgba(249, 134, 21, 0.25) 0px 2px 4px,
      rgba(249, 134, 21, 0.25) 0px 4px 8px,
      rgba(249, 134, 21, 0.25) 0px 8px 16px,
      rgba(249, 134, 21, 0.25) 0px 16px 32px,
      rgba(249, 134, 21, 0.25) 0px 32px 64px;
  }
`;

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.section`
  padding-top: 60px;
`;

export const Title = styled.h2`
  color: #38aca8;
  text-align: center;
  font-weight: 400;
  font-size: 32px;
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 750px;
  margin: 0 auto;
  justify-content: center;
`;

export const ContainerCart = styled.div`
  box-shadow: 0px 4px 20px 3px rgba(92, 106, 127, 0.3);
  height: 210px;
  width: 180px;
  border-radius: 6px;
  transition: 0.2s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  /* cursor: pointer; */
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  /* &:hover {
        box-shadow:
          rgba(249, 134, 21, 0.25) 0px 1px 2px,
          rgba(249, 134, 21, 0.25) 0px 2px 4px,
          rgba(249, 134, 21, 0.25) 0px 4px 8px,
          rgba(249, 134, 21, 0.25) 0px 8px 16px,
          rgba(249, 134, 21, 0.25) 0px 16px 32px,
          rgba(249, 134, 21, 0.25) 0px 32px 64px;
        
        a {
            color: #fff;
            background-color: #F98615;
        }
  } */

  a {
    border: 1px solid #f98615;
    color: #f98615;
    border-radius: 16px;
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 13px;
    margin-top: 18px;
    transition: 0.4s linear;
    text-decoration: none;

    &:hover {
      background: linear-gradient(90deg, #f98615 29.31%, #fea808 77.26%);
      color: #fff;
      box-shadow:
        rgba(249, 134, 21, 0.25) 0px 1px 2px,
        rgba(249, 134, 21, 0.25) 0px 2px 4px,
        rgba(249, 134, 21, 0.25) 0px 4px 8px,
        rgba(249, 134, 21, 0.25) 0px 8px 16px,
        rgba(249, 134, 21, 0.25) 0px 16px 32px,
        rgba(249, 134, 21, 0.25) 0px 32px 64px;
    }
  }
`;

export const Img = styled(Image)`
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  color: #5c6a7f;
  font-weight: 600;
  font-size: 15px;
`;

// export const ButtonLink = styled.a`
export const ButtonLink = styled(Link)`
  border: 1px solid #f98615;
  color: #f98615;
  border-radius: 16px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 13px;
  margin-top: 18px;
`;

export const LinkMember = styled.a`
  text-decoration: none;
`;

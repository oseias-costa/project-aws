"use client";
import { LinksContainer, LinkItem } from "./curriculum.styles";

interface Links {
  links: {
    item: string;
    link: string;
  }[];
}

export default function Links({ links }: Links) {
  const listLinks = links.map((link) => {
    return (
      <LinkItem key={link.item}>
        <p>{link.item}: </p>
        <a href={link.link} target="_blank">
          &nbsp;{link.link}
        </a>
      </LinkItem>
    );
  });

  return (
    <LinksContainer>
      <h3>Links</h3>
      <div>{listLinks}</div>
    </LinksContainer>
  );
}

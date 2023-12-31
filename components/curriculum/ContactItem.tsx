"use client";
import * as S from "./curriculum.styles";

export default function ContactItem({item, content}: {item: string, content: string}){
    return(
        <S.ContactContainer key={item}>
            { item === 'Linkedin' ? (
                <a href={`https://www.linkedin.com/in/${content}`} target='_blank'>linkedin.com/{content}</a>
            ) : (
                <p>&nbsp;{content}</p>
            )}
        </S.ContactContainer>
    )
}
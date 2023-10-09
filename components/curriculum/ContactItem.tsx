"use client";
import * as S from "./curriculum.styles";

export default function ContactItem({item, content}: {item: string, content: string}){
    return(
        <S.ContactContainer>
            <strong>{item} : </strong>
            <p>&nbsp;{content}</p>
        </S.ContactContainer>
    )
}
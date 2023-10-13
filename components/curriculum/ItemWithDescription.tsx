"use client";
import { ItemWithDescriptionContainer } from "./curriculum.styles";

export default function ItemWithDescription({item, content}: {item: string, content: string | undefined}){
    return(
        <ItemWithDescriptionContainer>
            <h3>{item}</h3>
            <p>{content}</p>
        </ItemWithDescriptionContainer>
    )
}
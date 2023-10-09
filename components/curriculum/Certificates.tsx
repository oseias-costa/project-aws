"use client";
import { CertificatesContainer } from "./curriculum.styles";

export default function Certificates({content}: {content: string[]}){
    return(
        <CertificatesContainer>
            <h3>Certificados</h3>
            {   
                content?.map((item: string) => 
                <p key={item}>•&nbsp;&nbsp;&nbsp;{item}</p>)
            }
        </CertificatesContainer>
    )
}
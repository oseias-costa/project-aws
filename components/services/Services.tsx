"use client";
import * as S from "./services.styles";
import S3 from "../../public/img/home/s3-icon.svg";
import Cloudfront from "../../public/img/home/cloudfront-icon.svg";
import Route from "../../public/img/home/route-icon.svg";
import Image from "next/image";

export default function Services(){
    return(
        <S.ServicesContainer>
            <S.Subtitle>Serviços utilizados</S.Subtitle>
            <S.ServicesItems>
                <S.ServiceItem>
                    <Image  width={48} src={S3} alt='AWS S3' />
                    <h3>S3</h3>
                    <p>O S3 é frequentemente usado para hospedar conteúdo da web, fazer backup de dados, armazenar arquivos de log e como repositório de objetos para aplicativos em nuvem.</p>
                </S.ServiceItem>
                <S.ServiceItem>
                    <Image width={48} src={Cloudfront} alt='AWS Cloudfront' />
                    <h3>Cloudfront</h3>
                    <p>O CloudFront ajuda a melhorar a velocidade de carregamento de sites e aplicativos, reduzindo a latência e a carga do servidor, além de proteger contra ataques DDoS.</p>
                </S.ServiceItem>
                <S.ServiceItem>
                    <Image width={48} src={Route} alt='AWS Route 53' />
                    <h3>Route 53</h3>
                    <p>Route 53 é fundamental para o gerenciamento de DNS e roteamento de tráfego na AWS, facilitando a configuração de domínios, balanceamento de carga, failover e roteamento geográfico.</p>
                </S.ServiceItem>
            </S.ServicesItems>
        </S.ServicesContainer>
    )
}
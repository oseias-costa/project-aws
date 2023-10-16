import Certificates from "@/components/curriculum/Certificates";
import ContactItem from "@/components/curriculum/ContactItem";
import * as S from "@/components/curriculum/curriculum.styles";
import ItemWithDescription from "@/components/curriculum/ItemWithDescription";
import ProfissionalExperience from "@/components/curriculum/ProfissionalExperience";
import Links from "@/components/curriculum/Links";
import { data } from "./_data";

export async function generateStaticParams() {
  return await data;
}

export default function CurriculoPage({
  params,
}: {
  params: { memberId: string };
}) {
  const { memberId } = params;
  const member = data.filter((item) => item.memberId === memberId)[0];

  return (
    <>
      <head>
        <title>{member.name}</title>
      </head>
      <S.Container>
        <S.TitleContainer>
          <S.Title>Currículo</S.Title>
        </S.TitleContainer>
        <S.LinksPage>
          <S.Link href="/">Início</S.Link>
          <p>{">"}</p>
          <S.Link href={member.memberId}>{member.name}</S.Link>
        </S.LinksPage>
        <S.Contact>
          <S.ContactRight>
            <h2>{member.name}</h2>
            <S.ButtonDownload href={member.download} download>
              Download
            </S.ButtonDownload>
          </S.ContactRight>
          <S.ContactLeft>
            <ContactItem item="Whatsapp" content={member.phone} />
            <ContactItem item="Email" content={member.email} />
            <ContactItem item="Linkedin" content={member.linkedin} />
          </S.ContactLeft>
        </S.Contact>
        {member.about !== "" ? (
          <ItemWithDescription item="Sobre mim" content={member?.about} />
        ) : (<></>)}
        <ItemWithDescription item="Compentências" content={member.skills} />
        <ProfissionalExperience content={member.professioalExperience} />
        <ItemWithDescription item="Formação" content={member.education} />
        <Certificates content={member.certificates} />
        <Links links={member.links} />
      </S.Container>
    </>
  );
}

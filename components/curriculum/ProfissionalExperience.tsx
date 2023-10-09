"ise client";
import { ExperienceItem, ProfissionalExperienceContainer } from "./curriculum.styles";

interface Experience {
        title: string;
        tasks: string;
        period: string
}

export default function ProfissionalExperience({content}:{content: Experience[]}){
    return(
        <ProfissionalExperienceContainer>
            <h3>Experiência Profissional</h3>
            { content?.map((item: Experience) => {
                return(
                    <ExperienceItem key={item?.title}>
                        <h4>{item?.title} - {item?.period}</h4>
                        <p>{item?.tasks}</p>
                    </ExperienceItem>
                )
            })}
        </ProfissionalExperienceContainer>
    )
}
import { curriculoData } from "./_curriculoData";

interface Params {
    params: {
        curriculoId: string 
    }
}

export async function generateStaticParams({ params} : Params){
   const member = await curriculoData.map((member) => {
        member.name === params.curriculoId
    })
    return [
        {  
            curriculoId: member.toString() 
        }
    ] 
}

export default function Page({ params } : Params){
    const { curriculoId } = params

    return(
        <div>{curriculoId}</div>
    )

}
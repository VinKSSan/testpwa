import { Conteiner } from "@/styles/globalSty";
import { StySecHerChar } from "./stylesPesq";


export function SecHerPesq(item) {
    let nome = item.item.item.nome
    console.log(nome, 'outeer')
    return(
        <>
            <StySecHerChar item={nome} >
                <Conteiner>
                   <h1 style={{color:'white'}}>{nome}</h1>
                </Conteiner>
            </StySecHerChar>
        </>
    )
}
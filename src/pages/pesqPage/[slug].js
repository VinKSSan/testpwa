const itens = require("/src/utils/itens.json");

import { useRouter } from "next/router";
import { PagTi } from "@/components/pageTitle";
import { SecHerPesq } from "@/components/pesquisaPage/sectionHer/indexPesq";



//criando a lista de rotas
export default function PagePesq(item) { 
   const router = useRouter();
   if(router.isFallback) {
    return <p>carregando...</p>
   } 
    
    return(
        <>
            <PagTi title="pagina de pesquisa"/>
            {<SecHerPesq item={item}/>}
        </>
    )
}


export async function getStaticPaths(){
    
    const value = Object.values(itens);
    const paths = value.map((it)=>{
        return{
            params:{slug: it.slug}
        }
    });
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
//    const itens = await require("/src/utils/itens.json");
    const value = Object.values(itens);
    const item = value.find((it) => it.slug===params.slug)

    return {
        props:{
            item
        }
    }
}

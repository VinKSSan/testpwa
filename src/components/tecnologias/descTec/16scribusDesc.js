import Image from "next/image";

import ScriIcon from "../../../../public/assets/UT/iconsTech/scribus.svg"

const ScriDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={ScriIcon}/>
                <h1>Scribus</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Uma ferramenta poderosa de Desktop Publishing (DTP) , essencial para criar layouts visualmente atraentes e comunicar eficazmente informações, Scribus é um destaque no mundo do design gráfico e editoração eletrônica. O Scribus destaca como uma aplicação robusta, que oferece uma ampla gama de recursos para profissionais do design de Documentos eletrônicos. </p> 
                    <p>disponível para Windows, macOS e Linux. Scribus foi Desenvolvido para atender às necessidades de layout de página. Com recursos avançados de layout, gerenciamento de cores e suporte tipográfico, Scribus é considerando uma alternativa poderosa para aqueles que buscam uma solução versátil na projeção de designs de paginas de documentos eletrônicos.</p> 
                    <p>O Scribus oferece um conjunto abrangente de ferramentas para criar layouts complexos de páginas. Com guias, grades e réguas que facilitam o alinhamento preciso de textos e imagens, Scribus permite o posicionamento ideal de cada elemento da pagina.</p> 
                    <p>Scribus possui recursos avançados de gerenciamento de cores e Suporte a perfis ICC e modos de cor CMYK, o que é essencialmente útil para garantir  consistência na impressão profissional de cada página.</p> 
                    <p>Oferecendo suporte para uma ampla variedade de fontes e estilos tipográficos, além de um controle avançado sobre o espaçamento entre letras, palavras e linhas, Scribus garante que a estética do documento esteja de acordo com o desejado.</p> 
                    <p>Além do mais, Scribus Inclui em sua aplicação, uma biblioteca abrangente de documentos modelos, que podem servir como ponto de partida para a elaboração de diversos formatos de documentos, como páginas de livros e páginas de jornais, proporcionando um aceleramento no processo de design. Uma vez que o documento esteja pronto para uso, Scribus permite a exportação do documento para cinco principais formatos de arquivos eletrônicos, incluindo PDF e imagens rasterizadas.</p> 
                    <p>Scribus é compatível com Windows, macOS e Linux, é uma ferramenta valiosa para profissionais, empresas e entusiastas, seus recursos avançados e comunidade vibrante, garantem sua eficiência a usuários de diferentes sistemas operacionais e objetivos. Com sua popularidade aumentando de forma contínua, Scribus tornou-se uma alternativa eficaz e acessível frente as opções comerciais disponíveis no mercado.</p> 
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.scribus.net/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default ScriDesc;
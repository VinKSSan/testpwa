import Image from "next/image";

import ImpreIcon from "../../../../public/assets/UT/iconsTech/libreoffice-impress.svg"

const ImpreDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={ImpreIcon}/>
                <h1>Impress</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Impress é o Softwares de criação, edição e visualização de apresentações, desenvolvido para atender às várias necessidades de usuários, que vão desde estudantes até profissionais de negócios, Impress oferece um conjunto abrangente de ferramentas para criar apresentações visuais impressionantes e envolventes, podendo criar slides que contenham vários elementos diferentes, incluindo texto, listas com marcadores e numeração, tabelas, gráficos e uma vasta gama de objetos gráficos tais como clipart, desenhos e fotografias.</p>
                    <p>Com uma interface intuitiva e familiar, projetada para facilitar a criação e edição de slides, Impress inclui verificador ortográfico, dicionário de sinônimos, estilos de texto, e estilos de plano de fundo, além de possuir uma variedade de modelos de slide pré-projetados que abrangem desde apresentações de negócios até projetos educacionais.</p>
                    <p>Os recursos avançados de design e layout oferecidos pelo impress, possibilitam que seus usuários desenvolvam apresentações deslumbrantes a partir de  Modelos  profissionais de Slides, com gráficos, imagens e formas personalizáveis incorporados, com transições suaves entre slides e animações personalizadas que adicionam um toque dinâmico às apresentações.</p>
                    <p>Impress oferece ferramentas robustas para edição de textos e incorporação de mídia, permitindo a criação e formatação de títulos, parágrafos e listas com facilidade, ao passo que suporta a incorporação de áudio e vídeo diretamente nos slides,  garantindo uma apresentação esteticamente agradável com narrativas envolventes e apresentações dinâmicas.</p>
                    <p>As apresentações criadas no Impress podem ser exportadas para formatos populares, como PDF e PPT, Além de integra-se à plataforma LibreOffice Online, que possibilita o acesso remoto aos documentos de slides, possibilitando a colaboração em tempo real de várias pessoas que podem contribuir e editar simultaneamente.</p>
                    <p>mpress é uma ferramenta preciosa, destinada a criação de apresentações dinâmicas, informativas e visualmente atraentes. Combinando recursos intuitivos, flexibilidade de design e opções de colaboração, capaz de transformar apresentações em oportunidades de expressão criativa e impacto visual, Impress torna-se uma ferramenta satisfatória aos usuários focados, não só na comunicação efetiva de suas ideias, mas também na personalização de cada aspecto da apresentação, a fim de atender aos mais seletos públicos e objetivos. </p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.libreoffice.org/discover/impress/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default ImpreDesc;
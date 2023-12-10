import Image from "next/image";

import InksIcon from "../../../../public/assets/UT/iconsTech/inkscape.svg"

const InksDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={InksIcon}/>
                <h1>Inkscape</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Inkscape é um software profissional de manipulação de gráficos vetoriais complexos, com suporte a um conjunto de ferramentas poderosas para desenho, manipulação de camadas, criação de formas, edição de caminhos, textos e mais, proporcionando aos seus usuários a capacidade de criar imagens vetoriais de alta qualidade.</p>
                    <p>Sua interface de usuário intuitiva, com barras de ferramentas organizadas, menus claros e área de trabalho personalizável, proporciona uma curva de aprendizado leve aos iniciantes e agilidade aos profissionais mais avançados. Com variadas ferramentas avançadas, projetadas para criar e editar vetores gráficos e textos de forma organizada, em camadas manipuláveis, Inkscape proporcionando flexibilidade em apresentações textual, qualidade em ilustrações gráficas e facilidade na organização de projetos complexos.</p>
                    <p>Inkscape possui Suporte a transformações vetoriais complexas, edição por seleção, manipulação de caminhos vetoriais, filtros complexos, um rico conjunto de paleta de cores , além de formas vetoriais pré-definidas e ferramentas de desenho livre.</p>
                    <p>O processador de texto embutido no Inkscape, proporciona textos esteticamente agradáveis, personalizáveis em todos os sentidos, com amplas possibilidades de cores, fontes e estilos, suportando filtros elegantes, que deixam o texto mais chamativo e cativante.</p>
                    <p>Suas diversas qualidades, fazem de Inkscape uma ferramenta ideal para projeção de logotipos, ilustrações, diagramas, dashbords, desenhos vetoriais, infográficos, cartões e design gráfico em geral. </p>
                    <p>Inkscape oferece uma solução acessível e eficiente para dar vida às ideias visuais de seus Usuários, experimentá-lo é descobrir o quanto essa ferramenta pode impulsionar a criatividade em projetos gráficos e facilitar a transição das ideias para a realidade.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://inkscape.org/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default InksDesc;
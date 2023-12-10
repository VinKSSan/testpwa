import Image from "next/image";

import GIMPIcon from "../../../../public/assets/UT/iconsTech/gimp.svg"

const GIMPDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={GIMPIcon}/>
                <h1>GIMP</h1>
            </div>
            <div className="textDesc">
                <article> 
                    <p>O GNU Image Manipulation Program, GIMP é uma tecnologia robusta, com funcionalidades poderosas, projetado para ser uma alternativa eficiente para os profissionais de manipulação gráfica. Por suas qualidades, GIMP ganhou popularidade entre uma comunidade diversificada de usuários.</p>
                    <p>Facilmente, usuários de outras plataformas poderão migrar ao GIMP, por tal possuir uma interface familiar, semelhante a outros softwares de igual propósito. Além de intuitiva, GIMP possui uma interface altamente customizável, permitindo que os usuários organizem painéis e ferramentas de acordo com suas preferências e fluxo de trabalho.</p>
                    <p>Sua capacidade em lidar com edição avançada de camadas e mascaras individuais, permitem ajustes não destrutivos, oferecendo flexibilidade e controle durante o processo de edição. Com uma gama de ferramentas precisas de Seleção, incluindo Retângulos, Elipses, Varinha Mágica e seleção Livre, GIMP facilita o isolamento de áreas específicas em uma imagem para manipulações específicas. GIMP dispõe de diversos pincéis e de ferramentas personalizadas de desenho, além de possuir uma ampla paleta de cores e diversos modelos de texturas, atendendo as diversas necessidades de artistas digitais.</p>
                    <p>Além do mais, GIMP disponibiliza uma variedade de filtros e efeitos especiais, destinados aos mais variados propósitos, incluindo desfoque, nitidez, ajustes de cor e mais. GIMP, também, permite a adição de texto às imagens com várias opções de formatação,  Essas ferramentas oferecem uma maneira rápida de experimentar e adicionar elementos criativos às criações, ao passo que proporcionam flexibilidade para a criação de designs gráficos e composições textuais. </p>
                    <p>Se quisermos desfrutar de recursos ainda mais poderosos que os nativamente integrados a ferramenta, podemos instalar plugins que estendem as funcionalidades do GIMP, permitindo que os usuários adicionem funcionalidades extras, o que amplia ainda mais suas capacidades, adaptando-se a necessidades mais específicas dos usuários.</p>
                    <p>a integração do GIMP em fluxos de trabalho existentes e a colaboração com outros softwares de design, é fácil e sem dor de cabeça, afinal GIMP suporta praticamente todos os formatos de arquivos Gráficos, incluído: PSD, JPEG, PNG, GIF e TIFF.</p>
                    <p>GIMP é uma ferramenta versátil, complexa em suas funções e simples e suas operações, é útil aos profissionais de design gráfico, fotógrafos e artistas digital, com seu conjunto diversificado de ferramentas, seus usuários podem expressar a criatividade de forma rica e objetiva. </p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.gimp.org/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default GIMPDesc;
import Image from "next/image";

import KritIcon from "../../../../public/assets/UT/iconsTech/krita.svg"

const KritDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={KritIcon}/>
                <h1>Krita</h1>
            </div>
            <div className="textDesc">
                <article> 
                    <p>O Krita é um programa de desenho e pintura eletrônica concebido especialmente para artistas digitais, ilustradores, cartunistas e animadores, dispõe de recursos poderosos para criação de arte digital, incluindo suporte a pintura em camadas, manipulação avançada de pincéis, edição de imagem e animação.</p>
                    <p>Krita apresenta uma interface de usuário elegante, personalizável e fácil de ser manuseada, colocando as principais ferramentas ao alcance do usuário, com barras de ferramentas organizadas e paleta de cores acessível, oferecendo facilidade e agilidade aos Artistas Digitais.</p>
                    <p>As ferramentas do Krita são desenvolvidas com visão na pintura digital, arte conceptual, ilustrações e texturas. Os Pincéis Avançados e Personalizáveis disponibilizados pelo Krita, oferecem deste texturas naturais até aquarela e tinta a óleo, Além de serem passiveis a ajustes parâmetros como tamanho, opacidade e dinâmica, permitindo que artistas alcancem resultados únicos. Utilizando o Krita, usuários podem ainda, ajustar cores, aplicar filtros e realizar transformações diretamente na plataforma, eliminando a necessidade de alternar entre diferentes programas durante o processo criativo. </p>
                    <p>Com suporte robusto a camadas e máscaras individuais, Krita permite que  artistas trabalhem em componentes separados sem afetar o desenho com um todo. Isso significa que as alterações podem ser aplicadas de partes isoladas do desenho sem afetar diretamente a imagem original, o que oferece flexibilidade e controle durante o processo criativo.</p>
                    <p>Uma característica avançada do Krita é seu poderoso suporte a animações. Com ferramentas e recursos de animação, Krita supera as pinturas estáticas, permitindo que artistas criem sequências de quadros, ajuste a velocidade da animação e explore técnicas de animação tradicional.</p>
                    <p>Uma característica avançada do Krita é seu poderoso suporte a animações. Com ferramentas e recursos de animação, Krita supera as pinturas estáticas, permitindo que artistas criem sequências de quadros, ajuste a velocidade da animação e explore técnicas de animação tradicional.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://krita.org/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default KritDesc;
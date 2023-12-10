import Image from "next/image";

import SwiIcon from "../../../../public/assets/UT/iconsTech/swiper.svg"

const SwiDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={SwiIcon}/>
                <h1>SwiperJS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O Swiper.js, uma biblioteca JavaScript de código aberto, robusta e flexível, destaca-se como uma solução moderna, poderosa e flexível para criar carrosséis interativos, responsivos e atraentes em páginas web. O SwiperJS é uma ferramenta valiosa para melhorar a navegação e apresentação de conteúdo em páginas web fornece uma maneira fácil de implementar carrosséis ricos em recursos, incluindo navegação por gestos, suporte a múltiplos slides visíveis e muitas opções de personalização.</p>  
                    <p>Desenvolvida para ser eficiente em termos de desempenho e altamente responsiva, o Swiper.js oferece uma variedade de recursos que vão além da simples transição de slides, permitindo aos desenvolvedores criar experiências de usuário dinâmicas e visualmente atraentes. Esta biblioteca é principalmente conhecida por:</p> 
                    <p>Recursos de responsividade e navegação por gestos, o SwiperJS adapta-se perfeitamente em dispositivos móveis e suporta navegação por gestos, permitindo que os usuários deslizem para a esquerda ou direita para navegar entre os slides.</p> 
                    <p>Possui uma configuração simples e pode ser facilmente integrado em qualquer página web, permite a configuração de número de slides visíveis, velocidade da transição, direções de navegação dentre outros parâmetros.</p> 
                    <p>Swiper permite a exibição de vários slides simultaneamente e inclui controles de navegação incorporados, como setas de próxima e anterior, bem como paginadores e barras de progresso para facilitar a navegação, criando assim, carrosséis mais dinâmicos e visualmente ricos.</p> 
                    <p>Uma variedade de efeitos de transição são incorporados no Swiper, desde desvanecimentos suaves até animações mais dinâmicas, permitindo uma personalização extensiva.</p> 
                    <p>Além das configurações básicas, o Swiper.js permite uma customização avançada através do uso de CSS personalizado e manipulação direta do DOM, proporcionando controle total sobre a aparência e o comportamento do carrossel.</p> 
                </article>
            </div>
            <div className="butSair">
                <a href="https://swiperjs.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default SwiDesc;
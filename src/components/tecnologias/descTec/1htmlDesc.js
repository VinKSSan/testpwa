import Image from "next/image";

import htmlIcon from "../../../../public/assets/UT/icon-html-xs.svg"

const HTMLDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={htmlIcon}/>
                <h1>HTML5</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O HTML, ou HyperText Markup Language (Linguagem de Marcação de HiperTexto), é a tecnologia central no funcionamento da World Wide Web. O HTML foi criado originalmente nos primeiros dias da World Wide Web (WWW) por Tim Berners-Lee. É a linguagem de marcação que permite a criação e a estruturação de conteúdo na internet. Combinando textos, imagens, links e mais, o HTML é a base da maioria das páginas web que podemos ver online.</p>
                    <p>O HTML funciona através de "marcadores", chamados "tags", que envolvem o conteúdo e indicam ao navegador como exibi-lo. Cada tag tem uma função específica, como criar parágrafos, cabeçalhos, listas, links… , etc. As tags HTML são organizadas em uma estrutura hierárquica, o que significa que podemos aninhar tags dentro de outras para criar layouts e estruturas complexas. As primeiras versões do HTML, como o HTML 2.0, eram bastante simples e destinadas principalmente à criação de documentos estruturados com hiperlinks.</p>
                    <p>À medida que a web evoluiu e se tornou mais interativa, as limitações das versões anteriores do HTML se tornaram evidentes. Faltavam recursos para incorporação de mídia, formulários complexos, gráficos avançados e recursos de acessibilidade. O HTML5 é uma versão mais recente e avançada do HTML que foi desenvolvida para atender às crescentes demandas da web moderna.</p>
                    <p>O HTML está associada a maioria dos conteúdos na web que conhecemos e usamos todos os dias. É uma ferramenta poderosa para criar conteúdo online e uma habilidade indispensável para aqueles que desejam se aventurar no mundo do desenvolvimento web. O HTML está em constante evolução, com novas versões e recursos sendo desenvolvidos regularmente. A versão mais recente é o HTML5, que trouxe muitos recursos avançados, como Mídia incorporados, formulários aprimorados, armazenamento local, semântica melhorada, suporte a Canvas e SVG e Melhor suporte para acessibilidade.</p>
                    <p>O HTML5 é uma versão aprimorada e mais poderosa do HTML, trouxe uma série de recursos novos e melhorias para atender às necessidades da web moderna, incluindo multimídia, gráficos, interatividade e acessibilidade aprimorada. É a versão mais amplamente usada do HTML na web hoje em dia e é amplamente suportada pelos navegadores modernos.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://html.spec.whatwg.org/multipage/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default HTMLDesc;
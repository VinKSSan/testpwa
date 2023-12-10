import Image from "next/image";

import SCSSIcon from "../../../../public/assets/UT/iconsTech/sass.svg"

const SCSSDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={SCSSIcon}/>
                <h1>SASS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O SASS, Syntactically Awesome Stylesheets, é uma linguagem de script, interpretada ou compilada para CSS, capaz de adicionar novas funcionalidades e uma sintaxe mais prática ao CSS. A utilização desta tecnologia facilita o desenvolvimento e a manutenção de folhas de estilo mais complexas e extensivas.</p>
                    <p>Dentre as tecnologias que marcaram o desenvolvimento-web moderno, com avanços em termos de simplicidade e aprimoramento, o SASS se destaca como linguagem de script para estilização. Criado por Hampton Catlin e desenvolvido por Natalie Weizenbaum, o SASS teve sua primeira versão lançada em 2006, transformou a maneira como lidamos com folhas de estilo CSS, foi amplamente aceito na comunidade de desenvolvedores web e evoluiu consideravelmente desde o seu lançamento, sendo considerado uma linguagem que oferece recursos avançados e uma sintaxe mais poderosa em comparação com o CSS tradicional.</p>
                    <p>O SASS é caracteristicamente conhecido por suas principais utilidades: introdução de variáveis; Aninhamento de Seletores; construção de Mixins; recursos de herança; funções matemáticas incorporas.</p>
                    <p>O SASS oferece uma abordagem mais dinâmica e eficiente para a estilização de aplicações web. Com uma sintaxe aprimorada e recursos adicionais, o SASS proporciona uma maneira mais eficiente e modular em trabalhar com estilos mais complexos, tornando  os códigos CSS mais limpos, organizados, reutilizáveis, conservados e adaptáveis  as crescentes demandas do desenvolvimento web moderno.</p>    
                </article>
            </div>
            <div className="butSair">
                <a href="https://github.com/sass/sass"  target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default SCSSDesc;
import Image from "next/image";

import JSIcon from "../../../../public/assets/UT/icon-js.svg"

const JSDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={JSIcon}/>
                <h1>JavaScript</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O JavaSpript é uma linguagem de programação de alto nível, amplamente voltada ao desenvolvimento web. Esta tecnologia destaca-se como sendo uma linguagem de script que permite a interação entre os elementos de documentos de hipertexto. Possibilitando a criação de páginas mais  interativas e responsivas, o JavaScript cria uma experiência mais envolvente aos usuários da web, ao passo que torna as páginas web mais do que meros documentos estáticos. Esta tecnologia é considerada a espinha dorsal da interatividade e do dinamismo na web moderna. </p>  
                    <p>Inicialmente chamada de Mocha, posteriormente de LiveScript, O JavaScript foi desenvolvido em 1995 por Brendan Eich, que por razões de Marketing adotou ‘JavaScript(JS)’ para nomear esta tecnologia.</p>
                    <p>Desde o seu desenvolvimento o JavaScript passou por significativas evoluções, mas suas principais utilidades e características podem ser resumidas nas seguintes:</p>
                    <p>Possibilidade de modificar a estrutura e o conteúdo do DOM(Document Object Model) em tempo real;</p>
                    <p>Inspirado em C e JAVA, o JS é relativamente fácil de ser utilizado, ao passo que possui uma sintaxe amigável;</p>
                    <p>JS, por ser uma linguagem direcionada a objetos, permite, além da criação de objetos, a manipulação de heranças e polimorfismo, oferecendo mais flexibilidade no design e organização do código; </p>
                    <p>JS possui suporte a operações assíncronas, o que o permite executar tarefas em segundo plano sem afetar a execução de outras operações.</p>
                    <p>Além do núcleo da linguagem, o JS dispõe de um vasto ecossistema  de bibliotecas e frameworks, que simplificam o desenvolvimento de web-aplicações mais complexas.</p>
                    <p>Com uma comunidade ativa e em constante evolução, o JavaScript  desempenha um papel central na evolução da web e no desenvolvimento de aplicações inovadoras, é uma ferramenta indispensável aos desenvolvedores e um recurso excepcional para a experiência moderna dos usuários da web.</p> 
                </article>
            </div>
            <div className="butSair">
                <a href="https://ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default JSDesc;
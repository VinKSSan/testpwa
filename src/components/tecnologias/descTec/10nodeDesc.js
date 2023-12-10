import Image from "next/image";

import NodeIcon from "../../../../public/assets/UT/iconsTech/nodejs.svg"

const NodeDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={NodeIcon}/>
                <h1>NodeJS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O NodeJs é mais precisamente uma ferramente de linha de comando, capaz de criar um ambiente completa de execução de scripts JS no lado do servidor. Desenvolvido por Ryan Dahl em 2009, o Node.js utiliza o poderoso motor V8 do Google Chrome,  proporcionando um ambiente de execução rápido e eficiente.</p>
                    <p>Tradicionalmente o JavaScript é uma linguagem de programação exclusivamente executada em navegares. O Node.js estendeu a utilidade do JavaScript, ao utilizar o motor V8 que eficientemente compila o código JS em linguagem de máquina ,permitindo que Scripts JS sejam executados no lado do servidor. Isso unifica o desenvolvimento web, tornando o JavaScript uma linguagem de ponta a ponta e NodeJS uma ferramenta revolucionária. </p>
                    <p>Uma característica chave desta tecnologia é sua natureza assíncrona, orientada a eventos, que permite a criação de aplicativos capazes de lidar com múltiplas operações simultâneas sem a necessidade de bloquear operações menores separadas a cada requisição ao servidor, o que é especialmente útil ao desenvolver aplicações onde muitos clientes podem fazer solicitações simultâneas ao servidor.</p>
                    <p>Após o desenvolvimento do node, diversos desenvolvedores criaram scriptsJS independentes do navegar, os Módulos e frameworks Node, que compõem o ecossistema Node. Para navegar de forma segura por este ecossistema é que foi criado o NPM(Node Package Manager), um gerenciador de pacotes exclusivo para nodeJS. </p>
                    <p>O NodeJS possui um ecossistema riquíssimo e diversifica com múltiplas ferramentas JS para atender a diferentes necessidades de desenvolvimento web e cada uma destas ferramentas podem ser instaladas, removidas, atualizadas, verificadas  e pesquisadas pelo NPM.</p>
                    <p>O NodeJS transformou maneira como os desenvolvedores trabalham com JavaScript, proporcionando eficiência e flexibilidade. Sua abordagem assincrona e seu ecossistema vibrante o torna um recurso excepcional para uma variedade de aplicações. O NodeJS catalisou uma nova era no desenvolvimento web, capacitando os desenvolvedores a criar aplicações escaláveis e de alto desempenho.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://nodejs.org/en" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default NodeDesc;
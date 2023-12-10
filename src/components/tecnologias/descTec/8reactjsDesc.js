import Image from "next/image";

import ReactIcon from "../../../../public/assets/UT/icon-react-xs.svg"

const ReactDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={ReactIcon}/>
                <h1>ReactJS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O React é uma biblioteca JavaScript para construção de interfaces de usuário, frequentemente chamado de “biblioteca de visualização”, por ser focada especificamente na camada de visualização dos aplicativos, React é uma biblioteca de código aberto e atualmente mantida pelo Facebook.</p> 
                    <p>O React é particularmente eficaz na criação de aplicações SPAs, Single Page Applications, onde a página é carregada uma vez, e as interações subsequentes são tratadas sem a necessidade de recarregar a página.</p>
                    <p>React fornece um conjunto de ferramentas eficientes, centradas em fornecer funcionalidades para construção de interfaces de usuário declarativas e reativas. React é amplamente utilizado para criar componentes reutilizáveis e gerenciar o estado da aplicação.</p>
                    <p>As paginas HTML são extensas, únicas e possuem um único ciclo de vida, por isto a manutenção de elementos HTML d’uma página pode ser laboriosa, alterações de estado em elementos DOM pode significar alterações em toda a pagina. Com o React podemos dividir trechos da página em componentes autônomos e reutilizáveis que possuem seus próprios ciclos de vida, cuja alteração de estado não afeta o restante da página. Esta funcionalidade proporciona mais organicidade aos projetos web, facilitando seu mantimento e manutenção, além de permitir uma abordagem mais segura e eficiente ao trabalhar com mudanças de estado em elementos DOM. </p>
                    <p>O React.js é amplamente adotado na comunidade de desenvolvimento web, devido à sua abordagem declarativa, eficiência na atualização de interfaces e por possuir uma comunidade ativa. Esta é uma tecnologia poderosa e amplamente utilizado por empresas e projetos populares para criar interfaces de usuário reativas, dinâmicas e escaláveis.</p>  
                </article>
            </div>
            <div className="butSair">
                <a href="https://react.dev/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default ReactDesc;
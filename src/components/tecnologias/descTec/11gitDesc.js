import Image from "next/image";

import GitIcon from "../../../../public/assets/UT/iconsTech/git.svg"

const GitDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={GitIcon}/>
                <h1>Git</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O Git é um sistema de controle de versionamento,  amplamente utilizado para rastrear alterações no código-fonte de aplicações após e durante seu desenvolvimento. Criado por Linus Torvald. Em 2005, o Git é conhecido por sua eficiência, velocidade e flexibilidade.</p>  
                    <p>O principal funcionamento do Git é baseado nos conceitos de ‘repository’, ‘commit’, ‘branch’, ‘merge’ e ‘tag’: </p>
                    <p>para criarmos múltiplas versões de uma aplicação, de modo que cada versão represente um estado de evolução do código-fonte desta aplicação, podemos armazenar todos os arquivos da aplicação em um ambiente de versionamento, isto é o repositório, uma vez que o código é armazenado no repositório podemos alterá-lo  de modo que cada alteração possa facilmente ser revertida, sem refletir no estado atual do código fonte dentro do repositório, para que o código seja realmente alterado no repositório, podemos confirmar tais alterações por meio de commits, cada commit confirma uma alteração no código fonte da aplicação(é comum associar a cada commit uma mensagem que descreva as alterações efetuadas). Uma vez que um commit é feito todo o código anterior se perde e é substituído pelo código confirmado pelo commit, para que o código anterior ao commit não se perca, podemos criar ramificações separadas do código-fonte inicial, por meio da crianção d’uma ‘branch’, de modo que os commits na nova ramificação não altere a ramificação principal e caso queiramos mesclar diferentes ramificações em uma só , podemos utilizar o processo de ‘merging’. Caso queiramos referenciar cada nova ramificação do código-fonte, mapeando o histórico evolutivo da aplicação podemos usar as ‘Tags’.</p>
                    <p>Além de trabalharmos com repositórios pessoais locais, usando o Git, podemos trabalhar com repositórios remotos, o que nos permite compartilhar nossos repositórios locais com outros desenvolvedores e clonar repositórios de outros desenvolvedores em nosso servidor local.</p> 
                    <p>O Git é uma ferramenta essencial no âmbito do desenvolvimento de software moderno. Nos proporciona um histórico completo de alterações, oferece suporte a colaboração e capacidade de experimentar novas funcionalidades em ramificações separadas. Hoje, os conceitos básicos do Git são fundamentais para bom progresso de qualquer projeto de código-fonte.</p>  
                </article>
            </div>
            <div className="butSair">
                <a href="https://git-scm.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default GitDesc;
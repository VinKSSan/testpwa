import Image from "next/image";

import GuIcon from "../../../../public/assets/UT/iconsTech/gulp.svg"

const GulpDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={GuIcon}/>
                <h1>GulpJS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O Gulp.js é uma poderosa ferramenta de automação de tarefas (task runner) em JavaScript, desenvolvida com o objetivo de simplificar processos e otimizar o fluxo de trabalho no desenvolvimento web. </p>
                    <p>O task runner, GulpJS, é construído sobre o Node.js, tem por objetivo automatizar tarefas comuns no desenvolvimento web. Esta tecnologia permite aos desenvolvedores definir e executar tarefas automatizadas para processar, otimizar e gerenciar recursos do projeto, como arquivos CSS, JavaScript, imagens, entre outros recursos.</p>
                    <p>O funcionamento básico do GulpJS é baseado nos conceitos de ‘Tasks’, ‘Pipes’ e ‘GulpFile’:</p>
                    <p>As Tasks(tarefas) são operações específicas que podem ser automatizadas. Elas podem incluir uma série de atividades, desde a minificação de arquivos até transpilação de código. As tarefas geram  um fluxo de dados, que podem ser interconectados pelos pipes(canos) ,  que manipula os dados e os passa para as próximas tarefas. A definição de Tasks e as configurações de pipes são armazenadas em um arquivo, Geralmente, nomeado como ‘gulpfile.js’ e reside no diretório raiz do projeto.</p>
                    <p>A sintaxe e aplicação prática do GulpJS segue o padrão oferecido pelo JavaScript. Em um arquivo ‘gulpfile.js’, importamos o Gulp e Podemos criar Tacks utilizando o método ‘task()’, que recebe como argumentos, uma string como nome da tarefa e uma função de execução, que será a operação desta tarefa e é onde será definida as configurações de pipe.</p>
                    <p>O GulpJS simplifica tarefas repetitivas permitindo que os desenvolvedores se concentrem mais no código que em operações manuais, tediosas e repetitivas, reduzindo o tempo de produção e facilitando a criação de um fluxo de desenvolvimento mais suave.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://gulpjs.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default GulpDesc;
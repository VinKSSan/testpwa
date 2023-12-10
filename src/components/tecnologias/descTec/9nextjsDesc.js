import Image from "next/image";

import NextIcon from "../../../../public/assets/UT/iconsTech/nextjs.svg"

const NextDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={NextIcon}/>
                <h1>NextJS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Next.js é um framework para React.js, projetado para resolver desafios comuns enfrentados ao criar aplicações React mais complexas. A utilização de NextJS em aplicações React simplifica o desenvolvimento de aplicativos web, adicionando várias funcionalidades e convenções úteis, específicas para o desenvolvimento de aplicações web. </p>
                    <p>O Next.js adiciona funcionalidades adicionais, visando simplificar o desenvolvimento de aplicações React, fornecendo uma estrutura robusta e convenções predefinidas. Next.js é uma escolha comum para projetos React mais complexos.</p>
                    <p>Dentre as principais funcionalidades proporcionadas pela tecnologia NextJS, podemos citar:</p>
                    <p>Renderização do Lado do Servidor (SSR) e Geração de Páginas Estáticas; A funcionalidade SSR permite que o código do lado do servidor seja executado durante o tempo de requisição, enquanto a geração de páginas estáticas cria arquivos HTML durante a construção do aplicativo.</p>
                    <p>Roteamento automático baseado na estrutura de diretórios: esta funcionalidade proporciona uma abordagem mais eficiente e simples ao trabalhar com a navegação entre diferentes paginas da aplicação.</p>
                    <p>Preprocessadores e CSS-in-JS integrados: o que oferece maior simplicidade na gestão de estilos em aplicações React.</p>
                    <p>APIs integradas: o que permite a criação de APIs serverless diretamente no projeto NextJS , são automaticamente configuradas.</p>
                    <p>Estas são apenas algumas das muitas utilidades proporcionadas pelo NextJS, esta tecnologia de ponta e é popular em projetos React. é amplamente utilizado na indústria para criar aplicações web escaláveis, complexas, modernas e eficientes.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://nextjs.org/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default NextDesc;
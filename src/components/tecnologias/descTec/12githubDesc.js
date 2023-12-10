import Image from "next/image";

import GitHubIcon from "../../../../public/assets/UT/iconsTech/github.svg"

const GitHubDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={GitHubIcon}/>
                <h1>GitHub</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Ao trabalhamos com versionamento de código é extremamente útil compartilharmos nossos repositórios e clonar outros repositórios, para tanto precisamos d’um servidor remoto que abrigue uma Ampla gama de repositórios e os sirva para quem os quiser clonar. É aqui que entra o GitHub uma plataforma líder no mundo do desenvolvimento de software.</p> 
                    <p>Criado em 2008, o GitHub fornece ferramentas robustas para hospedagem, colaboração e controle de versão usando o sistema Git e se tornou uma plataforma essencial para desenvolvedores individuais, equipes e organizações ao redor do mundo, impulsionando a colaboração no desenvolvimento de software.</p> 
                    <p>O GitHub oferece uma Interface gráfica elegante e de fácil manuseio, onde os desenvolvedores podem facilmente visualizar repositórios, branches e commits. A plataforma oferta um sistema de ferramentas robustas para rastrear alterações, copiar repositórios, corrigir branches de forma colaborativa, além de fornecer ferramentas para revisões de código, destacando alterações e permitindo discussões dentro da plataforma. O Git Também oferece recursos de segurança para analisar e corrigir vulnerabilidades, além de proteger códigos privados contra ataques cibernéticos.</p> 
                    <p> O GitHub revolucionou a forma como os desenvolvedores colaboram e gerenciam projetos de software. Sua combinação de controle de versão Git, ferramentas de colaboração eficientes e integração com serviços de CI/CD o torna uma escolha fundamental para equipes e projetos individuais. Ao aproveitar os recursos do GitHub, os desenvolvedores podem criar software de alta qualidade de maneira eficaz e colaborativa.</p>    
                </article>
            </div>
            <div className="butSair">
                <a href="https://github.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default GitHubDesc;
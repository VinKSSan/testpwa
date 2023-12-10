import Image from "next/image";

import BaseIcon from "../../../../public/assets/UT/iconsTech/libreofficeDB.svg"

const BaseDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={BaseIcon}/>
                <h1>Data Base</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O libreOffice Data Base, ou simplesmente Base, é um software de gerenciamento de banco de dados relacionais,  um SGBD poderoso projetado em cima do motor HSQL, capaz de zipar em um arquivo: Tabelas; Formulários ;Consultas e Relatórios, oferecendo uma solução completa para a criação e gerenciamento de bancos de dados.</p>
                    <p>Base é relativamente fácil de ser manuseado, possui uma interface amigável, própria das ferramentas libreOffice, proporcionando facilidade na criação e manutenção de bancos de dados por usuários com diversos níveis de experiência em gerenciamento de dados. A utilização do Base elimina a necessidade de transições frequentes entre diferentes aplicativos, ao permitir que os usuários criem e acessem bancos de dados diretamente do ambiente familiar do LibreOffice, sendo consideradamente flexível, possui suporte a Bases externas como MySQL, PostgreSQL e Microsoft Access.</p>
                    <p>Com o Base, usuários podem criar tabelas para armazenar múltiplos tipos de dados de maneira organizada, além de possuírem ferramentas para criar e personalizar formulários, para entrada de dados e relatórios, para exibir saídas de dados, Base oferta ferramentas visuais que facilitam a criação de consultas SQL personalizadas, sem a necessidade de conhecimento aprofundado em SQL.</p>
                    <p>Fontes de Dados criadas no Base, além de possuírem Integração com Outros Componentes do LibreOffice, também dispões de ampla Compatibilidade e Portabilidade; permitindo a incorporação dos dados da base, diretamente em documentos e apresentações, podendo, a Fonte de Dados, ser facilmente compartilhada entre diferentes sistemas operacionais.</p>
                    <p>Uma ferramenta poderosa e versátil com ampla variedade em recursos, destinada a criação e gerenciamento de bancos de dados, libreoffice Data Base é simplesmente a escolha certa aos usuários que buscam uma alternativa simples, fácil e eficiente para lidar com aplicações e sistemas que necessitam de um banco de dados.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.libreoffice.org/discover/base/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default BaseDesc;
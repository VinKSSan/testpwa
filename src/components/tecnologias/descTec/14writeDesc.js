import Image from "next/image";

import WriIcon from "../../../../public/assets/UT/iconsTech/libreoffice-writer.svg"

const WriDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={WriIcon}/>
                <h1>Writer</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Libre Office Writer é um processador de texto de código aberto, parte da suíte de escritório LibreOffice. Desenvolvido pela The Document Fundation,  Writer oferece um conjunto de ferramentas avançadas para manipulação textual, a altura de pacotes de processamento textual comerciais.</p>
                    <p>O Writer possui uma interface amigável e intuitiva, com menus de navegação claros e ícones agradáveis, suas barras de ferramentas fornecem acesso rápido a uma ampla gama de ferramentas, projetadas para facilitar trabalhos que lidam com a criação e edição textos extensos ou curtos.</p>
                    <p>Writer é capaz de formatar documentos de texto de forma flexível e avançada, eis uma de suas  principais vantagens. Este processador de texto suporta estilos de parágrafo, caracteres e páginas, permitindo que os usuários personalizem a aparência de seus documentos de acordo com suas necessidades. Além de textos, Writer possui suporte a imagens, gráficos e objetos desenhados o que é útil para a criação de documentos visualmente atraentes.</p>
                    <p>Para facilitar  a revisão e trabalhos colaborativos, Write possui recursos de controle de alteração e comentários, de forma que os usuários possam acompanhar a diversas modificações que os documentos possam sofrer, o que torna o processo de edição mais eficiente e transparente. Além disto, Writer Possui suporte a uma variedade de formatos de documentos, do modo que os usuários possam abrir, editar e salvar documentos em diferentes formatos, como:DOC, DOCX, RTF, HTML, PDF, TXT, EPUB e ODT;  facilitando a colaboração com pessoas que usam outras suítes de escritório.</p>
                    <p>Pensando em gerir extensos documentos de texto, o Writer possui Ferramentas avançadas de gestão de documentos como: Índices automáticos, Tabelas de Conteúdo e navegação por seções, simplificando a criação de documentos mais longos. Além do mais, Writer suporta a integração de scripts para automatizar sequências de comandos e automatização de tarefas repetitivas.</p>
                    <p>O LibreOffice Writer é uma ferramenta poderosa e flexível para a criação e edição de documentos de texto. Com uma interface amigável, recursos avançados de formatação, compatibilidade de formato e capacidades de colaboração, o Writer se destaca como uma opção de processamento de texto acessível e eficaz para uma ampla gama de usuários. </p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.libreoffice.org/discover/writer/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default WriDesc;
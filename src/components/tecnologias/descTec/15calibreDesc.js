import Image from "next/image";

import CaliIcon from "../../../../public/assets/UT/iconsTech/calibre.svg"

const CaliDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={CaliIcon}/>
                <h1>Calibre</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Calibre foi desenvolvido por Kovid Goyal, em 2008(aprox),  é uma aplicação poderosa e versátil projetada para gerenciar bibliotecas digitais de livros eletrônicos (E-Books). Calibre se tornou uma referência na gestão de e-books, oferecendo uma gama impressionante de recursos e ferramentas.</p>    
                    <p>Os livros eletrônico ganharam significativo espaço no ambito digital, oferecendo aos leitores uma maneira mais conveniente de acessar e armazenar suas coleções literárias, com isso, Calibre destaca-se como sendo uma robusta ferramenta, projetada para facilitar a gestão de ebooks.  Com uma ampla gama de recursos, Calibre é uma escolha popular entre os entusiastas da leitura digital, sendo compatível com diversas plataformas, incluindo Windows, macOS e Linux.</p> 
                    <p>O Calibre oferece uma interface intuitiva, permitindo que profissionais organizem e gerenciem suas coleções de EBooks, sem dor de cabeça e ainda que possuam poucos conhecimentos em biblioteconomia. Com Calibre, os usuários podem adicionar metadados, capas, tags e classificações, de maneira a facilitar a localização de livros específicos. </p> 
                    <p>Para mais que gerir bibliotecas inteiras, Calibre pode ser configurado como um servidor local de conteúdo, possibilitando que seus usuários obtenham acesso remoto às suas bibliotecas digitais, por meio de uma interface web. </p> 
                    <p>Além de ser uma ferramenta amigável, Calibre distingui-se de outras ferramentas em sua capacidade de converter Ebooks entre uma ampla variedade de formatos. Isso é particularmente útil quando deseja-se adaptar um livro eletrônico para diferentes dispositivos de leitura, convertendo facilmente o formato Epub para PDF, ou vice-versa.</p> 
                    <p>É muito comum que a conversão de um formato qualquer para o formato Epub não saia exatamente da maneira que gostaríamos, por isto, Calibre  permite a visualização e edição de ebooks, de modo que os usuários possam, além visualizar seu Ebook logo após a conversão, realizar edições avançadas no código fonte do arquivo Epub, proporcionando maior controle sobre o conteúdo exibido pelo Epub.</p> 
                    <p>Com o surgimento do CSS3 e HTML5, o formato Epub foi atualizado para sua terceira versão. O padrão Epub3 expandiu as possibilidades de interação com o leitor, permitindo que escritores incorporassem figuras, vídeos, Animações e scripts JS em seus livros, o que permitiu uma experiência de leitura mais envolvente e expressiva, elevando a narrativa digital para novos patamares de interatividade.</p> 
                    <p>O Calibre oferece uma solução abrangente para gerenciar bibliotecas digitais. Com sua interface amigável e ampla variedade de recursos e ferramentas, Calibre permite aos usuários leitores uma experiência de leitura organizada e personalizada e aos profissionais escritores uma inovadora maneira de expor seus conteúdos, tornando-o uma escolha inteligente para leitores e escritores. Experimentar o Calibre e integrá-lo em sua rotina de leitura ou escrita pode ser um passo significativo em sua jornada de leitura eletrônica.</p> 
                </article>
            </div>
            <div className="butSair">
                <a href="https://calibre-ebook.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default CaliDesc;
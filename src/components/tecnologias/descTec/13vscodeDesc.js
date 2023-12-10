import Image from "next/image";

import VSIcon from "../../../../public/assets/UT/iconsTech/vscode.svg"

const VSDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={VSIcon}/>
                <h1>VScode</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O Visual Studio Code é um Ambiente de Desenvolvimento Integrado (IDE), de código aberto desenvolvido pela Microssoft. Laçado em 2015, o VScode é uma ferramenta amplamente utilizada por desenvolvedores de todo o mundo. Devido à sua simplicidade, extensibilidade e suporte robusto para uma variedade de linguagens de programação, o VScode tem se tornado a IDE numero 1 da maioria dos desenvolvedores de softwares.</p>  
                    <p>O VScode é caracteristicamente reconhecido por suas funcionalidades, que dentre as mais importantes e populares podemos citar: </p> 
                    <p>1.Terminal integrado que permite aos desenvolvedores executar comandos diretamente no contexto do projeto em que estão trabalhando; </p> 
                    <p>2.Recursos avançados de depuração para várias linguagens. Os desenvolvedores podem definir pontos de interrupção, inspecionar variáveis e seguir a execução do código passo a passo;</p>   
                    <p>3.Suporte a snippets (trechos de código) e autocompletar facilitam a escrita rápida e eficiente de código, economizando tempo durante o desenvolvimento; </p> 
                    <p>4.Integração com o git, permitindo que os desenvolvedores realizem operações como commit, pull, push e resolução de conflitos diretamente no IDE;</p> 
                    <p>5.Suporte a criação e instalação de extensões que estendem as funcionalidades da IDE, proporcionando um leque de ferramentas personalizáveis que melhoram a experiência dos desenvolvedores com a IDE;</p> 
                    <p>6.Suporte a uma ampla variedade de linguagens de programação, incluindo JavaScript, TypeScript, Python, Java, C#, entre outras;</p> 
                    <p>7.Compatibilidade com Windows, Linux e macOS, garantindo uma experiência consistente em diferentes sistemas operacionais;</p> 
                    <p>8.Gratuito e de código aberto, permitindo que os desenvolvedores acessem e contribuam para o desenvolvimento da IDE; </p> 
                    <p>9.Variedade de temas visuais e permite personalizar a aparência do ambiente de acordo com as preferências do desenvolvedor.</p> 
                    <p>O Visual Studio Code se destaca como um ambiente de desenvolvimento integrado moderno, oferecendo uma experiência flexível para desenvolvedores em diferentes sistemas e linguagens. Com uma comunidade ativa de desenvolvedores, uma vasta gama de extensões e atualizações regulares, o VSCode continua a ser uma escolha popular para quem busca eficiência e praticidade no desenvolvimento de software.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://code.visualstudio.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default VSDesc;
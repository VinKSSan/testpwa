import Image from "next/image";

import CSSIcon from "../../../../public/assets/UT/icon-css.svg"

const CSSDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={CSSIcon}/>
                <h1>CCS3</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O CSS, Cascading Style Sheets(linguagem de estilo em cascata) é uma importantíssima e poderosa linguagem de estilização, usada principalmente em conjunto com as linguagens de marcação XML e HTML. CSS é uma poderosa tecnologia e uma ferramenta crucial na definição de aparências e de layouts para documentos.</p> 
                    <p>O CSS é uma tecnologia pensada com o propósito de separar a estrutura dos documentos de seus Estilos, tal tecnologia nos permite controlar a apresentação de documentos de hipertexto, oferecendo-nos uma maneira de definir como os elementos do documento serão exibidos na tela.</p>
                    <p>O funcionamento básico desta tecnologia é baseado na seleção de elementos dos documentos e na aplicação de regras de estilo. A seleção é feita por meio de seletores, que são códigos relacionados à elementos do documento, de modo que para cada seletor podemos relacionar um ou mais elementos que compõe a estrutura do documento. Uma vez que os elementos do documento são selecionados, por meio dos seletores, podemos atribuir a cada seletor um objeto de estilo, assim criando as regras de estilização.</p>
                    <p>Objetos são tipos de dados caracteristicamente identificados pela estrutura: “ '{' propriedade : valor'}' ”. Em CSS as propriedades representam as características visuais dos elementos selecionados, enquanto os valores são atributos destas mesmas propriedades, que definem a forma como elas devem se apresentar no elemento. Desta maneira, a qualquer elemento do documento,  podemos definir características como cor, tamanho(L, A) e posição(X, Y) atribuindo, a tais propriedades, valores como azul, (250px, 150px), (500px, 300px), para termos um elemento de cor azul, com 250px de largura, 150px de altura, nas coordenadas (500px,300px) do documento.</p>
                    <p>O CSS3 é a terceira e mais recente atualização do Cascading Style Sheets. Lançado em 1999, o CSS3 é uma evolução do CSS e introduz novos recursos e melhorias significativas em comparação com anteriores versões(CSS1 e CSS2). Somente a partir do CSS3 é que foi possível: sombrear textos, arredondar Bordas, adicionar Gradiente, Transformações 2d e 3d, adaptação a diferentes formatos de telas e animações.</p>
                    <p>A utilização do CSS em documentos WEB é essencial, e o seu bom emprego pode ser um diferencial no impacto visual transmitido aos usuários da WEB. A evolução do CSS para o CSS3 nos permitiu criar aplicações mais elegantes e modernas, com animações atraentes e design responsivo.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.w3.org/Style/CSS/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default CSSDesc;
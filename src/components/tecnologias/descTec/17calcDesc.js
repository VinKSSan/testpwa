import Image from "next/image";

import CalcIcon from "../../../../public/assets/UT/iconsTech/libreoffice-calc.svg"

const CalcDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={CalcIcon}/>
                <h1>Calc</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Calc é uma suíte de planilhas eletrônicas, uma poderosa ferramenta que trabalha com elementos chamados planilhas de cálculo. Faz parte do conjunto de aplicativos de escritório gratuito e de código aberto, o LibreOffice. O componente de planilha de cálculo do LibreOffice. Oferecendo uma variedade de recursos para criar, editar e analisar planilhas, Calc é amplamente utilizado por indivíduos, empresas e organizações em todo o mundo.</p>
                    <p>A interface inicial do Calc é intuitiva, familiar aqueles que já utilizam outras plataformas. Com barras de: titulo; menu; ferramentas padrão; ferramentas de formatação; caixa de referência; barra de fórmulas; menu de configurações; painel de visualização; aba de planilhas e barras de status. Calc segue o padrão de softwares de manipulação de planilhas eletrônicas, facilitando migração de usuários familiarizados com outras plataformas. </p>
                    <p>As planilhas eletrônicas são aplicativos de software utilizados para armazenar, organizar, calcular, exibir e analisar dados tabulares. Os dados, de variados tipos, são organizados em células, identificadas nos pontos de interseção entre linhas e colunas em uma tabela/matriz. Cada dado na matriz pode ser relacionado a outro dado por meio de fórmulas funcionais, sistematizando a matriz com interconexões matemáticas, de modo que,  na exibição de cada dado, possa haver uma condição funcional. </p>
                    <p>Um exemplo simples seria a exibição da soma de dois valores, ( [A | B | A+B] ): na interseção da linha 1 e coluna 1, exibamos um número ‘A’; na coluna 2 da linha 1, o número ‘B’ ; na terceira coluna da mesma linha a soma ‘A+B’; então cresçamos o padrão  (  [A1 | B1 | A1+B1] , … , [An | Bn | An+Bn]  ) da linha 1 até a enésima linha. Assim, estamos condicionando, pela função de soma, os valores exibidos na terceira coluna aos valores da primeira e segunda coluna.  </p>
                    <p>Calc é uma ferramenta completa para trabalhos com planilhas eletrônicas, além de possuir uma Interface Intuitiva e um método de navegação Eficiente, oferece suporte a fórmulas personalizadas, funções complexas, vasta variedade de gráficos visuais para análise e exibição de dados, formatação condicional com estilos profissionais, ordenação de dados com filtragem e gerenciamento de classes, importação e exportação de dados de diversas fontes(incluindo ‘.xls’  e ‘.xlsx’). Tudo isso e ainda Colaboração efetiva e simultânea de várias pessoas em uma mesma planilha, com suporte a Macros Automatizadas.</p>
                    <p>Explorando e aproveitando ao máximo os recursos do LibreOffice Calc, os usuários podem, além de realizar tarefas cotidianas, analisar dados de maneira mais eficiente, tomar decisões baseando-se em dados e apresentar informações de forma visualmente impactante. Calc é uma escolha sólida para usuários individuais e organizações que buscam uma solução versátil e confiável para suas necessidades de planilhas eletrônicas.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.libreoffice.org/discover/calc/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default CalcDesc;
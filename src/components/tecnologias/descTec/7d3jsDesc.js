import Image from "next/image";

import D3Icon from "../../../../public/assets/UT/iconsTech/d3js.svg"

const D3Desc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={D3Icon}/>
                <h1>D3JS</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O Data-Driven Documents, é uma poderosa biblioteca para JavaScript e um recurso indispensável para quem trabalha com dados na web. Criada por Mike Bostock, a D3JS é rica em recursos e permite o vínculo entre os elementos DOM da página e dados em tempo real, de forma que os elementos recebam transformações e animações conforme a alteração dos dados.</p>  
                    <p>Esta é uma tecnologia fundamentalmente focada em data science, está intrinsecamente relacionada ao desenvolvimento de web-aplicações de análise técnica, que auxiliam na tomada de decisões, ao baseá-las em dados.</p>  
                    <p>Das principais características e utilidades desta biblioteca podemos citar:</p>  
                    <p>O D3JS permite um vínculo direto e em tempo real entre dados elementos DOM, Isso cria uma correspondência entre os dados e a estrutura do documento.</p>  
                    <p>Os métodos de seleção e manipulação de elementos DOM oferecidos pela lib D3JS, são poderosos e eficientes, permitindo aos desenvolvedores a criação, atualização e remoção de elementos conforme necessário.</p>  
                    <p>A lib D3JS é especialmente útil ao facilitar animações e transições fluidas, permitindo a visualização de mudanças nos dados ao longo do tempo, o que proporciona uma experiência visualmente atraente ao trabalhar com dados.</p> 
                    <p>Com a lib D3JS é possível criar escalas que mapeiam os dados para valores visuais, como tons de cores, larguras, posições ou alturas, além de incluir utilidades para a criação de eixos que facilitam a interpretação das visualizações.</p>  
                    <p>Além  utilizar SVG para renderização de gráficos vetoriais e permitir a criação de gráficos em formato PNG, D3JS Oferece uma variedade de layouts gráficos predefinidos, como; barras, linhas, árvores, mapas de calor, entre outros.</p>  
                    <p>D3.js é uma ferramenta robusta e oferece uma ampla gama de recursos para criar visualizações de dados complexas e personalizadas. Podemos facilmente afirmar que este é o futuro da visualização de dados e da tomada de decisões baseadas em dados.</p>     
                </article>
            </div>
            <div className="butSair">
                <a href="https://d3js.org/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default D3Desc;
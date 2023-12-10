import Image from "next/image";

import DrawIcon from "../../../../public/assets/UT/iconsTech/libreoffice-draw.svg"

const DrawDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={DrawIcon}/>
                <h1>Draw</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>O Draw é um programa de manipulação gráfica, próprio para desenhos de gráficos vetoriais, embora também seja capaz de executar algumas operações em gráficos rasterizados (pixeis). Considerado uma aplicação versátil de desenhos e gráficos, dispondo de uma gama de recursos poderosos, foi projetado para ser útil desde operações em tarefas simples de desenho até a criação de diagramas complexos, possibilitando que facilmente uma grande variedade de imagens gráficas sejam criadas.</p>
                    <p>Ao abrir a aplicação, os usuários são recebidos por uma tela limpa e uma variedade de barras de ferramentas, menus e painéis para acesso rápido às funcionalidades da aplicação. As funcionalidades do LibreOffice Draw são extensas, incluindo:</p>
                    <span>1.gerenciamento de camadas;</span>
                    <span>2.sistema magnético de ponto de grade;</span>
                    <span>3.dimensões e exibição de medição;</span>
                    <span>4.conectores para fazer organogramas;</span>
                    <span>5. Funções 3D que permitem a criação de pequenos desenhos 	tridimensionais (com textura e efeitos de iluminação);</span>
                    <p>Dentre outras...</p>
                    <p>O Draw oferece uma ampla variedade recursos para desenho, possui uma série de formas pré-definidas, desde simples retângulos e elipses até setas e conectores. Essas formas podem ser manipuladas e personalizadas de acordo com as necessidades do usuários, por meio de ferramentas de desenho livre como pincéis e lápis, além de poderem incorporar e editar outros elementos visuais em seus projetos.</p>
                    <p>Os projetos executados no Draw podem ser exportados para os formatos PDF, SVG e imagens rasterizadas, Sendo útil para diversas finalidades como; edição de widgets para dashboards, conversão de imagens, criação de esboços para animações, diagramação de documentos, dentre outras atividades de edição gráfica.  </p>
                    <p>Draw se destaca como uma ferramenta robusta para criação e edição de gráficos e desenhos, Sua interface intuitiva, ampla gama de recursos e sua flexibilidade o tornam uma escolha valiosa para estudantes, profissionais e entusiastas do design gráfico, mesmo não sendo designado para disputar com aplicações gráficas de alta qualidade.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.libreoffice.org/discover/draw/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default DrawDesc;
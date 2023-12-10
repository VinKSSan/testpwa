import Image from "next/image";

import mat from "../../../../public/bascaraM.png"

import MathIcon from "../../../../public/assets/UT/iconsTech/libreoffice-math.svg"

const MathDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={MathIcon}/>
                <h1>Math</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Math é uma ferramenta de criação e edição de fórmulas matemáticas no formato simbólico, é utilizado para criar e editar fórmulas (equações), na forma simbólica, dentro de documentos ou como objetos individuais, proporcionando uma maneira eficaz de criar e formatar expressões matemáticas e científicas para uso em documentos e apresentações.</p>
                    <p>Math possui uma interface simples, porém poderosa, sua área de trabalho oferece um ambiente onde expressões matemáticas podem ser digitadas e formatadas e uma barra de ferramentas intuitiva, possibilitando acesso rápido a comandos comuns, como frações, índices, símbolos matemáticos e operadores.</p>
                    <p>O Editor de Equações Math, utiliza uma linguagem de marcação para representar fórmulas, o LaTeX, o que permite que os usuários criem fórmulas complexas e profissionalmente formatadas. LaTeX, é uma linguagem projetada para ser lida com facilidade e lidar com expressões matemáticas complexas, incluindo frações, expoentes, raízes, integrais, somatórios e mais. Com o método formatação complexa oferecida pelo Math, os usuários podem ajustar propriedades de fonte, alinhamento e estilo. Ao usar LaTeX, Math, oferece flexibilidade e precisão na representação de expressões matemáticas e com seu método de formatação avançado, garante que as fórmulas estejam visualmente coesas com o restante do documento. </p>
                    <p>Eis um exemplo simples de fórmula criada no Math, a Fórmula de Bhaskara:</p>
                    <div className="imagemM" >
                        <Image className="mathIma" src={mat}/>
                    </div>
                    <p>Math, não só, simplifica a criação de expressões matemáticas, mas também eleva o nível de apresentação e precisão em trabalhos acadêmicos, relatórios técnicos e apresentações. Sem dúvidas, é uma ferramenta valiosa para qualquer pessoa envolvida em atividades que requerem expressões matemáticas precisas e profissionalmente formatadas.</p>
                    <p>Math é uma ferramenta indispensável para aqueles que buscam uma solução eficaz para trabalhar com expressões matemáticas: estudantes, pesquisadores, professores e profissionais técnicos, podem se beneficiar com Math, uma plataforma flexível e eficiente para criar e incorporar fórmulas matemáticas em projetos profissionais.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://www.libreoffice.org/discover/math/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default MathDesc;
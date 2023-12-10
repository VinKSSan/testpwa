import ImaIni from "../../../../public/assets/UT/card_habilit/spacingBACK.png";
import Image from "next/image";

import calendar from "../../../../public/assets/UT/icon-calendar.svg"
import clock from "../../../../public/assets/UT/money.svg"

const CardHab0 = ()=>{
    

    const handleMouseMove = (e) => {        
        const im = document.getElementById('ima')
        const { left, top, width, height } = im.getBoundingClientRect();

        let psx= e.clientX
        let psy= e.clientY

        let dx= ((psx-left)/width)*100
        let dy= ((psy-top)/height)*100
       
        let x = -(dx-50)
        let y = -(dy-50)

        const transformValue = `translate(${x}%,${y}%) scale(1.5)`;
    
        document.getElementById('imagem').style.transform = transformValue;
        console.log(x,y, 'of y')    
    };

    const handleTouchMove = (e) => {
        const im = document.getElementById('ima')
        const { left, top, width, height } = im.getBoundingClientRect();

        let psx= e.clientX
        let psy= e.clientY

        let dx= ((psx-left)/width)*100
        let dy= ((psy-top)/height)*100
       
        let x = -(dx-50)
        let y = -(dy-50)

        const transformValue = `translate(${x}%,${y}%) scale(1.5)`;
    
        document.getElementById('imagem').style.transform = transformValue;
        console.log('of y') 
    };

       const moEnt=()=>{console.log('funci');document.getElementById('imagem').classList.add('active')}
       const moLiv=()=>{
            document.getElementById('imagem').style.transform = 'scale(1)';
       }

    return(
        <a href="#"  className="card-post-lg">
            <div 
                id="ima" 
                className="image" 
                onMouseMove={handleMouseMove} 
                onTouchMove={handleTouchMove}
                onMouseLeave={()=>{moLiv()}}
                
            >
                <Image 
                    id="imagem"
                    className="img" 
                    onMouseEnter={()=>{moEnt()}} 
                    src={ImaIni} 
                    alt="Post grande"
                />
            </div>
            <div className="info">
            <div className="top-info">
                <span className="categorie">tecnologia</span>
                <ul>
                    <li>
                        <Image src={calendar} alt="Icone de calendario"/>
                        <span>Melhor prazo</span>
                    </li>
                    <li>
                        <Image width={16} height={16}  src={clock} alt="Icone de calendario"/>
                        <span>Melhor preço</span>
                    </li>
                </ul>
            </div>
            <h3 className="txt-white">Sua presença digital começa aqui! websites interativos e responsivos, textos criativos e cativantes, imagens de alta qualidade.</h3>
            </div>
          
        </a>
    )
}

export default CardHab0
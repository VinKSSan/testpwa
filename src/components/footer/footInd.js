import { FootSty } from "./footSty"
import Image from "next/image";
import vinsanLog from "../../../public/VinSanLogg.svg"
import arrow from '../../../public/assets/UT/arrow-up.svg'

import likedinLog from "../../../public/assets/contact_icon/linkedin.svg"
import faceLog from "../../../public/assets/contact_icon/facebook-color-svgrepo-com.svg"
import ytubeLog from "../../../public/assets/contact_icon/youtube.svg"
import mailLog from "../../../public/assets/contact_icon/email-9-svgrepo-com.svg"
import whatsLog from "../../../public/assets/contact_icon//whatsapp-128-svgrepo-com.svg"
import { useEffect } from "react";
import { Link } from "react-scroll";

const Foot = ()=>{
    
    const rotação = ()=>{
        const setinha = document.getElementById('Setinha')
        setinha.classList.toggle('rodar')
    }

    useEffect(()=>{
        const observerIntersec = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("ativo")
                entry.target.querySelector('.container').classList.add('ativo')
                entry.target.querySelectorAll('li').forEach((lis)=>{
                    lis.classList.add('ativo');
                })
               
            } else {
                console.log('desativo')
                entry.target.querySelector('.container').classList.remove('ativo')
                entry.target.querySelectorAll('li').forEach((lis)=>{
                    lis.classList.remove('ativo');
                })              
              }
            });
        });

        const section = document.querySelector('.secFot');
        observerIntersec.observe(section);
        return () => {
            observerIntersec.unobserve(section);
        };
    },[])

    return(
        <FootSty id="fote" className="secFot">
            <div className="container">
                <div className="left-footer">
                    <strong>©2023 VinSan.ED</strong>
                    <p>Meu nome é Vinicius Sanches, sou editor e desenvolvedor de conteúdo web-informacional. Estudar 📚 , trabalhar 🛠 e contribuir 🤝 são os pilares que sustentam minha jornada. Estou comprometido com o constante aprimoramento dos meus saberes, aplicando-os em meus trabalhos e buscando uma contribuição mútua para a construção de um mundo melhor 🌎🤝☮.</p>
                </div>
                <div className="right-footer">
                    <div className="group">
                        <span>Dev</span>
                        <Image id="LOGOf" style={{height: '100px', width: '250px'}} src={vinsanLog} alt=""/>
                    </div>
                    <button type="button" onClick={()=>{rotação()}} id="js-btn-scroll-top">
                        <Image style={{height: '25px', width: '35px'}} id='Setinha' src={arrow} alt=""/>
                    </button>
                </div>
            </div>
            <div className="contato">
                <ul>
                    <li className="C1">
                        <Image src={mailLog} width={40} height={40} alt="Email"/>
                        <strong><span>Email: </span>VinSan.ed@proton.me</strong>
                    </li>
                    <li className="C2">
                        <Image src={whatsLog} width={40} height={40} alt="Telefone"/>
                        <strong><span>telefone: </span>(93)992283745</strong>
                    </li>
                    <li className="C3">
                        <Image src={likedinLog} width={40} height={40} alt="likedin"/>
                        <strong><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vinicius-sanches-88aa27218" >perfil Linkedin</a></strong>
                    </li>  
                    <li className="C4">
                        <Image src={faceLog} width={40} height={40} alt="facebook"/>
                        <strong><a href="https://www.facebook.com/profile.php?id=61553152607144" target="_blank">pagina facebook</a></strong>
                    </li>  
                    <li className="C5">
                        <Image src={ytubeLog} width={40} height={40} alt="you-tube"/>
                        <strong><a href="https://www.youtube.com/channel/UCycsaYplLmm7-ESBrvJtJeg" target="_blank">canal You-Tube</a></strong>
                    </li>
                </ul>
            </div>
        </FootSty>  
    )
}

export default Foot;
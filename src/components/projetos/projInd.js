import Image from 'next/image'
import React,{ useEffect, useState } from 'react';
import 'swiper/css/bundle';
import { Swiper } from 'swiper/bundle';

import { ProjPSty, CardPodcast } from './projSty';

import arrowL from "../../../public/assets/UT/arrow-slide.svg"
import time from "../../../public/assets/UT/icon-timer.svg"
import play from "../../../public/assets/UT/icon-play.svg"
import gitIcon from "../../../public/assets/UT/iconsTech/github1.svg"
import ima2 from "../../../public/assets/UT/img-podcast-02.jpg"

import CapaMilk from "../../../public/assets/imaProjetos/milkShake/millkscapa.png"
import CapaComp from "../../../public/assets/imaProjetos/comptwave/tec.png"
import capaBlogE from  "../../../public/assets/imaProjetos/blogExam/capaBlog.jpg"
import capaRick from "../../../public/assets/imaProjetos/siteRick/capa.webp"
import capaSys from "../../../public/assets/imaProjetos/systemInf/Compcapa.png";
import capaMar from  "../../../public/assets/imaProjetos/marvel/MarvelCapa.png"

import SysInf from './vids/projSysInf';


const ProjInd = ()=>{
// definindo modo de vizualização dos projetos
    const [exib, setExib] = useState('')
    const Vprojetos = [
        (<p key={0}></p>),
        (<SysInf className="comptwave" nun="proj01" nameproj="Comptwave" key={1}/>),
        (<SysInf className="MilkShake" nun="proj02" nameproj="MilkShake" key={2}/>),
        (<SysInf className="BlogExample" nun="proj03" nameproj="BlogExample" key={3}/>),
        (<SysInf className="RickAndMorty" nun="proj04" nameproj="RickAndMorty" key={4}/>),
        (<SysInf className="SystemInfor" nun="proj05" nameproj="SystemInfor" key={5}/>),
        (<SysInf className="Marvel" nun="proj06" nameproj="Marvel" key={6}/>)
    ]

//definindo o swiper
    useEffect(()=>{
         new Swiper(".slide-podcast", {
            slidesPerView: 4,
            spaceBetween: 32,
            pagination: {
              el: ".s-podcast .top .swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".s-podcast .top .btn-next",
              prevEl: ".s-podcast .top .btn-prev",
            },
            speed: 600,
            breakpoints: {
              320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.1
              },
              991: {
                slidesPerView: 2.5
              },
              1100: {
                slidesPerView: 3.5,
                spaceBetween: 32,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 32,
              }
            }
          });
          setExib(Vprojetos[0])
    }, [])

//criando observador de classe, para fechar a exibição do projeto
    useEffect(()=>{
        let contF = document.querySelector('.exibir')

        let observerMutati = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
               if (mutation.attributeName === "class") {
                // captura de mudança de clase
                    let cl = contF.className;
                    let Fcl = 'fechar' 
                    console.log("A classe do elemento mudou:", cl);
                    if(cl.includes(Fcl)){setExib(Vprojetos[0])}                              
                }
            });
        });
        observerMutati.observe(contF, { attributes: true });
    },[])

//criando função de exibição
    const exibir =(nome)=>{
        let contF = document.querySelector('.exibir')
        if(contF.classList.contains('fechar')){
            contF.classList.remove('fechar')
        } 
        switch(nome){
            case 'Comptwave':
                setExib(Vprojetos[1]);
                break;
            case 'MilkShake':
                setExib(Vprojetos[2])
                break;
            case 'BlogExample':
                setExib(Vprojetos[3]);
                break;
            case 'RickAndMorty':
                setExib(Vprojetos[4]);
                break;
            case 'SystemInfor':
                setExib(Vprojetos[5]);
                break;
            case 'Marvel':
                setExib(Vprojetos[6]);
                break;
            default:
                setExib(Vprojetos[0]);
        }     
    };

    return(
        <ProjPSty id='projet' className="s-podcast">
           <div className='exibir'>{exib}</div> 
            <div className="container">
                <div className="top">
                    <h2>Projetos</h2>
                    <div className="ctrl-slide">
                        <div className="swiper-pagination"></div>
                        <div className="ctrl">
                            <button className="btn btn-prev">
                                <Image className='img' width={25} height={25} src={arrowL} alt=""/>
                            </button>
                            <button className="btn btn-next">
                                <Image className='img' width={25} height={25} src={arrowL} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="slide-podcast">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <CardPodcast onClick={()=>{let nome='Comptwave'; exibir(nome)}} className="card-podcast pro01">
                                <div className="image">
                                    <Image className='img' width={200} height={'auto'} src={CapaComp} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="time">
                                        <span className="tag-ep">Proj-01</span>
                                        <div className="read">
                                            <Image className='img' width={10} height={10} src={time} alt=""/>
                                        <span>landing-page</span>
                                        </div>
                                    </div>
                                    <h6 className="txt-white">Realidade virtual: Entendendo a tecnologia</h6>
                                    <div className="play">
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={play} alt="icone de play"/>
                                            <span>Observar projetos</span>
                                        </div>
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={gitIcon} alt="icone de play"/>
                                            <a href='google.com'><span>Git code</span></a>
                                        </div>
                                    </div>
                                </div>
                            </CardPodcast>
                        </div>
                        <div className="swiper-slide">
                            <CardPodcast onClick={()=>{let nome='MilkShake';exibir(nome)}} className="card-podcast pro02">
                                <div className="image">
                                    <Image className='img' width={200} height={200} src={CapaMilk} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="time">
                                        <span className="tag-ep">Proj-01</span>
                                        <div className="read">
                                        <Image className='img' width={10} height={10} src={time} alt=""/>
                                        <span>landing-page</span>
                                        </div>
                                    </div>
                                    <h6 className="txt-white">Realidade virtual: Entendendo a tecnologia</h6>
                                    <div className="play">
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={play} alt="icone de play"/>
                                            <span>Observar projetos</span>
                                        </div>
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={gitIcon} alt="icone de play"/>
                                            <a href='google.com'><span>Git code</span></a>
                                        </div>
                                    </div>
                                </div>
                            </CardPodcast>
                        </div>
                        <div className="swiper-slide">
                            <CardPodcast onClick={()=>{let nome='BlogExample';exibir(nome)}} className="card-podcast pro03">
                                <div className="image">
                                    <Image className='img' width={200} height={200} src={capaBlogE} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="time">
                                        <span className="tag-ep">Proj-01</span>
                                        <div className="read">
                                        <Image className='img' width={10} height={10} src={time} alt=""/>
                                        <span>landing-page</span>
                                        </div>
                                    </div>
                                    <h6 className="txt-white">Realidade virtual: Entendendo a tecnologia</h6>
                                    <div className="play">
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={play} alt="icone de play"/>
                                            <span>Observar projetos</span>
                                        </div>
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={gitIcon} alt="icone de play"/>
                                            <a href='google.com'><span>Git code</span></a>
                                        </div>
                                    </div>
                                </div>
                            </CardPodcast>
                        </div>
                        <div className="swiper-slide">
                            <CardPodcast onClick={()=>{let nome='RickAndMorty';exibir(nome)}} className="card-podcast pro04">
                                <div className="image">
                                    <Image className='img' width={200} height={200} src={capaRick} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="time">
                                        <span className="tag-ep">Proj-01</span>
                                        <div className="read">
                                        <Image className='img' width={10} height={10} src={time} alt=""/>
                                        <span>landing-page</span>
                                        </div>
                                    </div>
                                    <h6 className="txt-white">Realidade virtual: Entendendo a tecnologia</h6>
                                    <div className="play">
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={play} alt="icone de play"/>
                                            <span>Observar projetos</span>
                                        </div>
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={gitIcon} alt="icone de play"/>
                                            <a href='google.com'><span>Git code</span></a>
                                        </div>
                                    </div>
                                </div>
                            </CardPodcast>
                        </div>
                        <div className="swiper-slide">
                            <CardPodcast onClick={()=>{let nome='SystemInfor';exibir(nome)}} className="card-podcast pro05">
                                <div className="image">
                                    <Image className='img' width={200} height={200} src={capaSys} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="time">
                                        <span className="tag-ep">Proj-01</span>
                                        <div className="read">
                                        <Image className='img' width={10} height={10} src={time} alt=""/>
                                        <span>landing-page</span>
                                        </div>
                                    </div>
                                    <h6 className="txt-white">Realidade virtual: Entendendo a tecnologia</h6>
                                    <div className="play">
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={play} alt="icone de play"/>
                                            <span>Observar projetos</span>
                                        </div>
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={gitIcon} alt="icone de play"/>
                                            <a href='google.com'><span>Git code</span></a>
                                        </div>
                                    </div>
                                </div>
                            </CardPodcast>
                        </div>
                        <div className="swiper-slide">
                            <CardPodcast onClick={()=>{let nome='Marvel';exibir(nome)}} className="card-podcast pro06">
                                <div className="image">
                                    <Image className='img' width={200} height={200} src={capaMar} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="time">
                                        <span className="tag-ep">Proj-01</span>
                                        <div className="read">
                                        <Image className='img' width={10} height={10} src={time} alt=""/>
                                        <span>landing-page</span>
                                        </div>
                                    </div>
                                    <h6 className="txt-white">Realidade virtual: Entendendo a tecnologia</h6>
                                    <div className="play">
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={play} alt="icone de play"/>
                                            <span>Observar projetos</span>
                                        </div>
                                        <div className='refa'>
                                            <Image className='img' width={15} height={'auto'} src={gitIcon} alt="icone de play"/>
                                            <a href='google.com'><span>Git code</span></a>
                                        </div>
                                    </div>
                                </div>
                            </CardPodcast>
                        </div>
                    </div>
                </div>
            </div>
        </ProjPSty>
    )
}

export default ProjInd;
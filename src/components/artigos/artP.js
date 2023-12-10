import { Conteiner } from "@/styles/globalSty"
import Image from "next/image"

import { ArtSty, CardPost } from "./artPsty"


import ICCViewer from "./artigosEpub/apresentaIlusCC/ICdC.js"

import rocket from "../../../public/assets/UT/icon-rocket.png";
import image_post01 from "../../../public/ArtigosEpubs/capas/ilustrandoCC.jpg";
import image_post02 from "../../../public/ArtigosEpubs/capas/prodSuper.jpg"
import image_post03 from "../../../public/ArtigosEpubs/capas/compHisto.jpg"
import image_post04 from "../../../public/assets/UT/image-post-default-04.jpg"
import image_post05 from "../../../public/assets/UT/image-post-default-05.jpg"
import image_post06 from "../../../public/assets/UT/image-post-default-06.jpg"
import { useEffect, useState } from "react";
import React from "react";


const ArtP  = ()=>{
    const [viewer, setViewer] = useState('');
    const [texAN, setTexAN] = useState([])

    const fechar= ()=>{
        document.querySelector('body').classList.remove('overN')
        setViewer(<p>.</p>)} 

    const artigs = [
        (
            <div key={0} className="Eviewer">
                <button class="btnFech" onClick={fechar}> Sair </button>
                <ICCViewer class="iccViewer" epubFilePath="ArtigosEpubs/ilusCienComp.epub" /> 
            </div>
        ),
        (
            <div key={1} className="Eviewer">
                <button class="btnFech" onClick={fechar}> Sair </button>
                <ICCViewer class="iccViewer" epubFilePath="ArtigosEpubs/ProdSuper.epub" /> 
            </div>
        ),
        (
            <div key={2} className="Eviewer">
                <button class="btnFech" onClick={fechar}> Sair </button>
                <ICCViewer class="iccViewer" epubFilePath="ArtigosEpubs/BreIntroHistCom.epub" /> 
            </div>
        )
    ]

    const vizu = (tit)=>{

        document.querySelector('body').classList.add('overN')
        if(tit==='ICC'){setViewer( artigs[0])}
        if(tit==='prodsuper'){setViewer(artigs[1])}
        if(tit==='breIntHisComp'){setViewer(artigs[2])}
    }

    const addAnimaTex = () =>{
        const ebreve = (<p key={texAN.length} className="animaTex">EM BREVE</p>) 
        setTexAN([...texAN, ebreve])
        console.log('AAA EXEC AQUI 1', texAN, texAN.length)   
    }
    useEffect(
        ()=>{
            console.log(texAN.length, 'EFECT')
            if(texAN.length>0){
                console.log('TIMEOUT', texAN.length)
               const timeOID = setTimeout(()=>{
                    setTexAN([])
                    console.log('TIMEOUT', texAN.length)
                },5000)
                return ()=>clearTimeout(timeOID)
            }
        },[texAN])

    return(
        <ArtSty id="artig" className="s-artigos">
            {viewer}
            <Conteiner className="container">
                <div className="top">
                    <h2>Artigos</h2>
                    <p>Lorem ipsum dolor sit amet <Image className="img" src={rocket} alt=""/></p>
                </div>
                <div className="all">
                    <CardPost onClick={()=>{let tit="ICC";vizu(tit)}} className="card-post-default">
                        <div className="image">
                            <Image className="img"  src={image_post01} alt=""/>
                        </div>
                        <div className="info">
                            <span className="categorie">Ilustrando as Ciências da Computação</span>
                            <h6 className="txt-white">artigo didático ilustrativo, apresetação as Ciências da computação </h6>
                            <ul>
                                <li>
                                    <span>Abr, 2023</span>
                                </li>
                                <li>
                                    <span>10min de leitura</span>
                                </li>
                            </ul>
                        </div>
                    </CardPost>
                    <CardPost onClick={()=>{let tit="prodsuper";vizu(tit)}}  className="card-post-default">
                        <div className="image">
                            <Image className="img"  src={image_post02} alt=""/>
                        </div>
                        <div className="info">
                            <span className="categorie">Prodsuper</span>
                            <h6 className="txt-white">como produzir mais, introdução ao mini manual  do homen produtivo</h6>
                            <ul>
                                <li>
                                    <span>Mai, 2023</span>
                                </li>
                                <li>
                                    <span>10min de leitura</span>
                                </li>
                            </ul>
                        </div>
                    </CardPost>
                    <CardPost onClick={()=>{let tit="breIntHisComp";vizu(tit)}} href="detalhes-post.html" className="card-post-default">
                        <div className="image">
                            <Image  className="img"  src={image_post03} alt=""/>
                        </div>
                        <div className="info">
                            <span className="categorie">História da Ciência da Computação</span>
                            <h6 className="txt-white">do Ábaco aos modernos computadores, como chegamos aqui?</h6>
                            <ul>
                                <li>
                                    <span>Mar, 2023</span>
                                </li>
                                <li>
                                    <span>20min de leitura</span>
                                </li>
                            </ul>
                        </div>
                    </CardPost>
                </div>
                {texAN.map((e,i)=>(
                    <React.Fragment key={i}>{e}</React.Fragment>
                ))}
                <button onClick={()=>{addAnimaTex()}} className="btn-primary" >Carregar mais</button>
            </Conteiner>
        </ArtSty>

    )
}

export default ArtP;
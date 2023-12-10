import { Hed } from "./headerSty";
import { Conteiner } from "@/styles/globalSty";
import { PgPesSty } from "./pgesSty"
import Image from "next/image";

import vinL from "../../public/assets/VinSanLog3.svg";
import icon_tecnologia from "../../public/assets/artigos.svg";
import icon_react from "../../public/assets/projetos.svg";
import icon_html from "../../public/assets/call.svg";
import icon_lupa from "../../public/assets/UT/icon-lupa.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ()=>{
  const [carregar, setCarregar] = useState('carregando')

  const menOpen = () => {
    const btnMobile = document.getElementById('js-btn-mobile');
    const menuMob = document.querySelector(".menu-mobile")

    btnMobile.classList.toggle('is-active');
    menuMob.classList.toggle('menu-opened');
  }

  const [valueInput1, setValueInput1] = useState('')
  const [pes, setPes] = useState('')

  const changeValue = (e)=>{
    setValueInput1(e.target.value)
  }
  
  const [PesArray, setPesArray] = useState('cu')
  
  useEffect(()=>{
    
    const handlerPesquisaMob = (event)=>{
      event.preventDefault()
      setCarregar('não carregando');
      menOpen()
    }
    const handlerPesquisaDesk = (event)=>{
      event.preventDefault()
      setCarregar('não carregando')
    }

    const paginaPesquisa = (
      <div className="viewPesContains">
          <PgPesSty>
                <div className="pesBar">
                    <form action="" className="search">
                    <input className="pesquisa2" onChange={changeValue} value={valueInput1} type="text" placeholder="Pesquise "/>
                        <button type="submit">
                            <Image className="img" width={50} height={30} src={icon_lupa} alt="Icone de lupa"/>
                        </button>
                    </form> 
                </div>  
          </PgPesSty>
        <button className="btnFechaPes" onClick={()=>{setCarregar('carregando')}}>fechar</button>
      </div>
    )
    setPes(paginaPesquisa)
      
    const pesqBarMob = (
              <form action="" key={0} className="search">
                <input className="pesquisa1" type="text" onChange={changeValue} placeholder="Pesquise por artigo ou tema"/>
                <button type="submit"onClick={handlerPesquisaMob}>
                  <Image className="img" width={30} height={30} src={icon_lupa} alt="Icone de lupa"/>
                </button>
              </form>
    )
    const pesqBarDesk = (
            <form action="" className="search">
              <input type="text" onChange={changeValue}  placeholder="Pesquise "/>
              <button type="submit" onClick={handlerPesquisaDesk}>
                <Image className="img" width={50} height={30} src={icon_lupa} alt="Icone de lupa"/>
              </button>
            </form>
    )

    const arrH = [
      (
        <Conteiner key={0} className="container">
          <a href="https://www.canva.com/design/DAFZhdXUUFs/dHMFKdX4jda_GKnBMjfqSQ/view?utm_content=DAFZhdXUUFs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank"  className="logo">
            <Image className="img" width={400} height={'auto'} src={vinL} alt=""/>
          </a>
          <nav>
            <ul>
              <li>
                <Link href='/#artig' className="item-categorie">
                  <Image className="img" width={30} height={30} src={icon_tecnologia} alt="Icone de tecnologia"/>
                  <span>Artigos</span>
                </Link>
              </li>
              <li>
                <Link href="/#projet" className="item-categorie">
                  <Image className="img" width={30} height={30} src={icon_react} alt="Icone de tecnologia"/>
                  <span>Projetos</span>
                </Link>
              </li>
              <li>
                <Link href="/#fote" className="item-categorie">
                  <Image className="img" width={30} height={30} src={icon_html}alt="Icone de tecnologia"/>
                  <span>Contato</span>
                </Link>
              </li>
            </ul>

            <button onClick={()=>{menOpen()}} className="hamburger hamburger--vortex-r" id="js-btn-mobile" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </nav>
        </Conteiner>
      ),
      (
            <div key={1} className="menu-mobile">
              <ul>
                <li>
                  <Link href='#artig' className="item-categorie">
                    <Image className="img" width={30} height={30} src={icon_tecnologia} alt="Icone de tecnologia"/>
                    <span>Artigos</span>
                  </Link>
                </li>
                <li>
                  <Link href="#projet" className="item-categorie">
                    <Image className="img" width={30} height={30} src={icon_react} alt="Icone de tecnologia"/>
                    <span>Projetos</span>
                  </Link>
                </li>
                <li>
                  <Link href="#fote" className="item-categorie">
                    <Image className="img" width={30} height={30} src={icon_html} alt="Icone de tecnologia"/>
                    <span>Contato</span>
                  </Link>
                </li>

              </ul>
            </div>
      ),
    ]
    setPesArray(arrH)
  },[valueInput1])

  const rolar = ()=>{
    const header = document.getElementById('Hed')
    if (window.scrollY > 80) {
      header.classList.add('ativar') 
    } else {
      header.classList.remove('ativar')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', rolar);
    return () => {
      window.removeEventListener('scroll', rolar);
    };
  },[])
    return(
        <Hed id="Hed">
          {carregar==='carregando' ? PesArray[0]: pes}
          {carregar==='carregando' ? PesArray[1]: pes}
        </Hed>
    )
}

export default Header;
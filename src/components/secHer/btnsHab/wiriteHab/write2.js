import post01 from "../../../../../public/assets/UT/modaPost/PostGhost.jpg"
import Image from "next/image";
import ModalWire2 from "./ModalWire/wModal2";

const Write2 = ({ sair, setSair, setViewMod })=>{
    const Modal2 = (<ModalWire2 setSair={setSair}/>)
    const handMoveMod = ()=>{
        if(sair==="sairBTN2"){
            setSair('sair')
        }else{
            setSair('sairBTN2')
            setTimeout(()=>{
                setViewMod(Modal2);
            },400)
        }
   }
    return(
        <button onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Ghost Writing</span>
                <h6 className="txt-white">Escrita de conteúdo em nome de outra pessoa, como autobiografias, livros, artigos, blogs e discursos.</h6>
                <ul>
                    <li>
                    <span>5 a 30 dias</span>
                    </li>
                    <li>
                    <span>250 a 1500R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}
export default Write2;
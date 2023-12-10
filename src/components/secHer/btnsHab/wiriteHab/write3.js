import post01 from "../../../../../public/assets/UT/modaPost/postCopy.webp";
import Image from "next/image";
import ModalWire3 from "./ModalWire/wModal3";

const Write3 = ({sair, setSair, setViewMod })=>{
    const Modal3 = (<ModalWire3 setSair={setSair}/>)
    const handMoveMod = ()=>{
        if(sair==="sairBTN3"){
            setSair('sair')
        }else{
            setSair('sairBTN3')
            setTimeout(()=>{
                setViewMod(Modal3);
            },400)
        }
   }
    return(
        <button onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Copy Writing</span>
                <h6 className="txt-white">Redação persuasiva e criativa para publicidade, marketing, conteúdo para websites e e-mails promocionais.</h6>
                <ul>
                    <li>
                    <span>2 a 10 dias</span>
                    </li>
                    <li>
                    <span>50 a 500R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}
export default Write3;
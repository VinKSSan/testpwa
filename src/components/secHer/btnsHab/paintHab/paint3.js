import post01 from "../../../../../public/assets/UT/modaPost/PostartDig.jpg"
import Image from "next/image";
import ModalPaint3 from "./ModalPaints/pModal3";

const Paint3 = ({sair , setSair, setViewMod})=>{
    
    const Modal3 = (<ModalPaint3 setSair={setSair}/>) 
    const handMoveMod = ()=>{
        if(sair==="sairBTN3"){
            setSair('sair')
        }else{
            setSair('sairBTN3')
            setTimeout(()=>{
                setViewMod(Modal3);
            },600)
        }
   } 
    
    return(
        <button onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Ilustração Artistica</span>
                <h6 className="txt-white">Criação de modelos artisticos como personagens, paisagens e objetos.</h6>
                <ul>
                    <li>
                    <span>2 a 40 dias</span>
                    </li>
                    <li>
                    <span>100 a 2000R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}
export default Paint3;
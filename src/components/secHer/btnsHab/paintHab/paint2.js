import post01 from "../../../../../public/assets/UT/modaPost/postTech.jpg"
import Image from "next/image";
import ModalPaint2 from "./ModalPaints/pModal2";


const Paint2 = ({sair, setSair, setViewMod})=>{
    const Modal2 = (<ModalPaint2 setSair={setSair}/>) 
    const handMoveMod = ()=>{
        if(sair==="sairBTN2"){
            setSair('sair')
        }else{
            setSair('sairBTN2')
            setTimeout(()=>{
                setViewMod(Modal2);
            },600)
        }
   } 
    return(
        <button  onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">Ilustração Explicativa</span>
                <h6 className="txt-white">Construção de conteúdo grafico explicativo de caráter informativo, tecnico ou didático.</h6>
                <ul>
                    <li>
                    <span>5 a 40 dias</span>
                    </li>
                    <li>
                    <span>250 a 2000R$</span>
                    </li>
                </ul>
            </div>
        </button>
    )
}
export default Paint2;
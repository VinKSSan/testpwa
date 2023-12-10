import post01 from "../../../../../public/assets/UT/modaPost/postCrea.jpg";
import Image from "next/image";
import ModalWire1 from "./ModalWire/wModal1";

const Write1 = ({sair,  setSair, setViewMod })=>{
    const Modal1 = (<ModalWire1 setSair={setSair}/>)
    const handMoveMod = ()=>{
        if(sair==="sairBTN1"){
            setSair('sair')
        }else{
            setSair('sairBTN1')
            setTimeout(()=>{
                setViewMod(Modal1);
            },400)
        }
   } 
    return(
        <button onClick={handMoveMod} className="card-post-xs">
            <div className="image">
                <Image className="img" src={post01} alt="Image do primeiro post pequeno"/>
            </div>
            <div className="info">
                <span className="categorie">creative Writing</span>
                <h6 className="txt-white">Criação de conteúdo original para diversos fins, como histórias, poesias, roteiros e ficção.</h6>
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
export default Write1;
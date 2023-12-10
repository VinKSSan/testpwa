
import { DivInfo } from "../paintSty";
import Image from "next/image";
import post01 from "../../../../../../public/assets/UT/modaPost/postTech.jpg"
import xizinho from "../../../../../../public/assets/UT/xizinho.svg"
import {useState } from "react";


const ModalPaint2 = ({setSair})=>{

  const [opinion, setOpinion] = useState('');
  const [userEmail , setUserEmail] = useState('');
  const [userName , setUserName] = useState('');

  const [label , setLabel]= useState('Faça um orçamento!');

  const nameRegex  = /^[A-Za-z\s]+$/;
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar o comportamento padrão de submit do formulário  
    // Implementação da lógica para enviar o formulário    
    if (opinion.trim() !== '' && userEmail.trim() !== '' && userName!== '') {
      if(emailRegex.test(userEmail)){
        if(nameRegex.test(userName)){
          setLabel('mensagem enviada')
          const data = { opinion, userEmail, userName };
    
          try {
            const response = await fetch('/api/sendOpinion', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
              timeout: 15000,
            });
            
            if (response.status === 200) { // Verifique o status da resposta para determinar se a requisição foi bem-sucedida
              console.log('Opinião enviada com sucesso!');
            } else {
              console.log(response.status)
              console.error('Erro ao enviar a opinião.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
        }else{
          setLabel('nome invalido')
        }
      }else{
        setLabel('email Inválido')
      }
    } else {
      console.log('o Campo de opinião, email ou nome estão vazio.');
      setLabel('Campo de opinião, email ou nome vazio.'); 
    }
  };

    return(
        <DivInfo id="modaDev1" className="mod">
        <div className="Sair">
            <button onClick={(e)=>{e.preventDefault();setSair('sair')}}><Image src={xizinho} style={{width:'100%', height:"100%"}} alt="x de fechar"/></button>
        </div>
        <div className="contain">
            <div className="inform">
                <div className="imagem">
                    <Image style={{borderRadius:'6px', width:'100%', height:'auto'}}  alt="imagem ifografico" src={post01}/>
                </div>
                <div className="texto">
                    <h2>Ilustração Explicativa</h2>
                    <p>Ao criar imagens explicativas, como infográficos e ilustrações para materiais didáticos, mergulhamos no universo da clareza visual e do entendimento instantâneo, afinal, uma imagem pode explicar mais que muitas palavras.</p>
                </div>
            </div>
            <div className="formu">
                <div className="areaTex">
                    <h4>{label}</h4>
                    <label>
                        <textarea
                        placeholder="com relação ao desenvolvimento de imagens explicativas, como posso lhe ajudar...?"
                        className="campoTexto"
                        spellCheck="false" 
                        onChange={(e)=>{setOpinion(`tratando-se de ilustração explicativa:\n ${e.target.value}`);}}
                        rows={4}
                        cols={50}                     
                        />
                    </label>
                </div>
                <form onSubmit={handleSubmit}>
                    <label > 
                      <input
                        className="campoTexto"
                        placeholder="Seu nome..."
                        onChange={(e) =>{setUserName(e.target.value)}}
                        type="name"
                      />
                    </label>

                    <label>
                      <input 
                        className="campoTexto"
                        type="Email" 
                        placeholder="Seu Email..."
                        onChange={(e) => {setUserEmail(e.target.value)}}
                      />
                    </label>
                    
                    <button  type="submit">Enviar</button>
                </form>
            </div>  
        </div>
    </DivInfo>
    )
} 

export default ModalPaint2;
const { exec } = require('child_process');
const axios = require('axios');
// configurações de logs
const port = '3003'

const Endpoint = ` http://localhost:${port}`;

// Comando para construir o projeto Next.js em modo de produção
const buildCommand = 'yarn build';

// Comando para iniciar o servidor local
const startCommand = `yarn start -p ${port}`;

const comandoAbrirNavegador = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
const openUrl = comandoAbrirNavegador + Endpoint

// Função para executar comandos no terminal
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o comando: ${command}`);
        reject(error);
      } else {
        let logue = `-${stdout}\n`+`build sucess, server runing in the adress: ${Endpoint}\n` 
        console.log(logue);
        resolve();
      }
    });
  });
};

const rComan = (command =>{
  exec(command, (error, stdout)=>{
    if(error){
      console.error(error)
    } else {
      console.log('sucess sucess')
    }
  })
})

// Função principal para construir e iniciar o servidor
// Chamar a função principal
//função para verificar a acessibilidade no endpoint como callback
async function verificarAcessibilidade() {
  let acessível = false;
  while(acessível===false) {
    try {
      const resposta = await axios.get(Endpoint);
      if(resposta.status === 200){
        console.log(`${Endpoint} está acessível. Código de status: ${resposta.status}`);
        acessível=true
      }else{
        console.log('ainda não disponivel');
        await new Promise(resolve => setTimeout(resolve, 1000)); 
      }
    } catch (erro) {
      console.error(`${Endpoint} não está acessível. Erro: ${erro.message}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
  let run = async () => {
    try {
      await runCommand(buildCommand);
      rComan(startCommand);
      await verificarAcessibilidade();
      await runCommand(openUrl)
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`);
    } 
  }
  run()

import Image from "next/image";

import GrafaIcon from "../../../../public/assets/UT/iconsTech/grafana.svg"

const GrafaDesc = ()=>{
    
    function fecha(){
        const tecDes = document.querySelector('.tecDesc')
        tecDes.classList.add('fechado')
    }


    return(
        <div className="tecDesc">
            <div className="imagemDesc">
                <Image width={100} height={100} src={GrafaIcon}/>
                <h1>Grafana</h1>
            </div>
            <div className="textDesc">
                <article>
                    <p>Desde que a humanidade percebeu a relação intrínseca entre a matemática e a natureza, métodos de análise matemática ganham força e demonstram, cada vez mais, sua eficiência. A análise técnica centra-se na comparação de quantidades, que geometricamente organizadas, exibem formas significantes, de modo que alteradas as quantidades, as formas geométricas também se alteram e com a alteração das formas geométricas, altera-se os significados.</p>
                    <p>Um sistema de monitoramento pode ser criado, de forma simples, a partir de um conjunto de gráficos organizados que extraem, em tempo real, dados a cerca d’um objeto a ser monitorado. Cada vez que o objeto monitorado sofrer alguma alteração, tal alteração será registrada na forma de dado, que será encaminhado ao sistema de monitoramento, que por sua vez alterará a forma dos gráficos, permitindo que analistas percebam: por que e quando, o que mudou. Uma interface gráfica que forneça uma visão consolidada e visualmente compreensível de informações importantes, métricas ou indicadores-chave de desempenho (KPIs) em um sistema de monitoramento, são chamados Dashboards. </p>
                    <p>Grafana é uma plataforma poderosa e simples de ser utilizada, foi projetada com foco em análise e monitoramento de dados informacionais, por meio da criação de dashboards complexos e dinâmicos, essencial para profissionais de TI, engenheiros de sistemas e analistas de dados, que frequentemente envolvidos em atividades críticas relacionadas à gestão e análise de dados.</p>
                    <p>Grafana é altamente extensível e suporta uma variedade de fontes de dados: Oferecendo suporte a bancos de dados relacionais (MySQL, PostgreSQL), bancos de dados de séries temporais (InfluxDB, Prometheus), serviços em nuvem (AWS CloudWatch, Azure Monitor), entre outros, Além de oferecer Integração com APIs de diversos serviços/sistemas e suporte a Plugins que expandem suas funcionalidades.</p>
                    <p>Ao suportar uma ampla variedade de widgets(painéis), como: Gráficos de linhas, barras, dispersão,Candlestick dentre outro; Singlestat; Tabelas; Heatmap; Gauge(medidor circular ou linear) ; Pie Chart(pizza gráfico); Bar Gauge(medidor em barras);Clock(temporizador); Text Panel (Painel de Texto); Histogram(diagrama sob intervalos temporais); Worldmap(dados geográficos); entre outros, Grafana permite criar dashboards altamente personalizados para atender às diferentes necessidades, específicas o quanto sejam, de monitoramento e análise, sendo a escolha ideal para: Monitoramento de Infraestrutura; Análise de Dados de Séries Temporais; Monitoramento de Aplicações; Construção de Dashboards Executivo e Monitoramento de Nuvem.</p>
                    <p>Além do mais, Grafana oferta uma camada extra de segurança a sistemas de monitoramento de dados sensíveis, com recursos robustos de autenticação e autorização, garantindo que apenas usuários autorizados tenham acesso aos dashboards e dados.</p>
                    <p>O Grafana é uma ferramenta focada em transformar dados em informações visualmente impactantes, oferecendo flexibilidade e recursos avançados, possibilita que usuários possam desbloquear insights valiosos a partir de dados. Com uma comunidade rica em conhecimentos e ativa, a ferramenta continua em constante evolução, o que torna-a confiável aos profissionais que buscam visualizações  intuitivas e eficazes de dados informacionais.</p>
                </article>
            </div>
            <div className="butSair">
                <a href="https://grafana.com/" target="_blank">SAIBA MAIS</a>
                <button onClick={fecha}>FECHAR</button>
            </div>
        </div>
    )
}

export default GrafaDesc;
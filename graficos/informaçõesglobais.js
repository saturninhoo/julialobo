const url = 'https://raw.githubusercontent.com/ProfGesinelly/Turma_AT_CienciaDados/refs/heads/main/quantidadesdeusuarios.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const Automóvel_próprio = (dados.Automovel_proprio / 1e6)
    const Metrô = (dados.Metrô / 1e6)
    const Ônibus = (dados.Ônibus / 1e6)
    const Trem = (dados.Trem / 1e6)
    const Bicicleta = (dados.Bicicleta / 1e6)
    const Caminhando = (dados.Caminhando / 1e6)
    const Automóvel_de_aplicativo = (dados.Automovel_de_aplicativo / 1e6)
    const Outros = (dados.Outros / 1e6)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${Automóvel_próprio} milhões</span> que vão os trabalho de automóvel próprio, <span>${Metrô} milhões</span> que vão de metrô, <span>${Ônibus} milhões</span> que vão de ônibus, <span>${Trem} milhões</span> que vão de trem, <span>${Bicicleta} milhões</span> que vão de bicicleta, <span>${Caminhando} milhões</span> que vão caminhando, <span>${Automóvel_de_aplicativo} milhões</span> que vão de automóvel de aplicativo e <span>${Outros} milhões</span> que vão de outros meios de transporte. `


    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()
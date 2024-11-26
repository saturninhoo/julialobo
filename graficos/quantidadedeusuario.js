import { getCSS, tickConfig } from "./commons.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/ProfGesinelly/Turma_AT_CienciaDados/refs/heads/main/quantidadesdeusuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosMeioTransporte = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDosMeioTransporte,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-principal')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Meios de transportes mais usados para ir para o trabalho',
            x: 0,
            font: {
                color: getCSS('--cor-secundaria'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'nome dos meios de transporte',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'milhões de úsuarios ativos',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()
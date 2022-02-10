//carne - 400 gr por pessoa + 6 horas - 650
//cerveja - 1200 ml por Pessoa + 6 horas - 2000ml
//Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

//crianças valem por 0,5 pessoa

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000}  kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 355)}  latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas / 2000)} Garrafas pet de 2l de Bebidas</p>`
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
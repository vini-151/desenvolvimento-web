const gasolina = 5.79;
const etanol = 4.29;
const diesel = 6.19;



function atualizarValor() {
    let tipo = document.getElementById("combustivel").value;
    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = gasolina
            break;
        case "etanol":
            precoPorLitro = etanol
            break;
        case "diesel":
            precoPorLitro = diesel
            break;
        default:
            document.getElementById("resultado").textContent = "Inválido"
            return;
    }

    calcularValorAbastecimento(precoPorLitro, litros)

}

function calcularValorAbastecimento(precoCombustivel, litros) {
    if (litros <= 0 || isNaN(litros)) {
        document.getElementById("resultado").textContent = "Impossível calcular"
    }else {
        let valorTotal = precoCombustivel * litros
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal)
    }
}

function formatarMoeda(valor) {
    return "R$ " + valor.toLocaleString("pt-br", { minimumFractionDigits: 2, maximunFractionDigits: 2 })
}

document.getElementById("litros").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
})

document.getElementById("litros").addEventListener("input", atualizarValor)
document.getElementById("combustivel").addEventListener("input", atualizarValor)

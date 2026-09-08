function calcular() {

    let codigo = Number(document.getElementById("codigo").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let preco;

    switch (codigo) {
        case 1:
            preco = 5.00;
            break;

        case 2:
            preco = 3.50;
            break;

        case 3:
            preco = 4.80;
            break;

        case 4:
            preco = 8.90;
            break;

        case 5:
            preco = 7.32;
            break;

        default:
            document.getElementById("resultado").innerHTML =
                "Código do produto inválido!";
            return;
    }

    let total = preco * quantidade;

    document.getElementById("resultado").innerHTML =
        "Valor a pagar: R$ " + total.toFixed(2);
}

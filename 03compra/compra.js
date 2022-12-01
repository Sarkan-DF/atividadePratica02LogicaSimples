// 3. Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

const totalCompra = 149.50
const parcelas = 3
const valorParcelas = totalCompra / parcelas

document.write(`O valor total da compra foi R$${totalCompra} <br/>`)
document.write(`Forma de pagamento: ${parcelas}x de R$${valorParcelas.toFixed(2)}`)
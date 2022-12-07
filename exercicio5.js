// 22. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//     Álcool: até 20 litros, desconto de 3% por litro
//     acima de 20 litros, desconto de 5% por litro

//     Gasolina:
//     até 20 litros, desconto de 4% por litro
//     acima de 20 litros, desconto de 6% por litro 

//     Escreva um algoritmo que leia o número de litros vendidos, 
//     o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), 
//     calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.


let tipoCombustivel = prompt("Qual foi o tipo de combustivel? \n A - Alcool \n G - Gasolina");
let qtdLitro = parseInt(prompt("Digite a quantidade de litros: "));

let valorPago = 0;
let totalPreco = 0;
let valorDesconto = 0;
let valorAlcool = 1.90;
let valorGasolina = 2.50;

if( tipoCombustivel === 'A' || tipoCombustivel === 'a' ) {

    if( qtdLitro <= 20 ) {
        
        totalPreco = qtdLitro * valorAlcool;

        //valorDesconto = (totalPreco * 0.03);
        valorDesconto = (totalPreco / 100) * 3;

        valorPago = totalPreco -  valorDesconto;

        console.log(`O valor total a ser pago pelo cliente é de: R$${valorPago.toFixed(2)}`);

    }else if( qtdLitro > 20 ){

        totalPreco = qtdLitro * valorAlcool;

        valorDesconto = (totalPreco / 100) * 5;

        valorPago = totalPreco - valorDesconto;
        
        console.log(`O valor total a ser pago pelo cliente é de: R$${valorPago.toFixed(2)}`);

    }

}else if( tipoCombustivel === 'G' || tipoCombustivel === 'g' ){

    if( qtdLitro <= 20 ) {
        
        totalPreco = qtdLitro * valorGasolina;

        //valorDesconto = (totalPreco * 0.04);
        valorDesconto = (totalPreco / 100) * 4;

        valorPago = totalPreco -  valorDesconto;

        console.log(`O valor total a ser pago pelo cliente é de: R$${valorPago.toFixed(2)}`);

    }else if( qtdLitro > 20 ){

        totalPreco = qtdLitro * valorGasolina;

        valorDesconto = (totalPreco / 100) * 6;

        valorPago = totalPreco - valorDesconto;
        
        console.log(`O valor total a ser pago pelo cliente é de: R$${valorPago.toFixed(2)}`);

    }
    
}

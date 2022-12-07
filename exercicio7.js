// 23. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                           Até 5 Kg                 Acima de 5 Kg
//     Morango               R$ 2,50 por Kg           R$ 2,20 por Kg
//     Maçã                  R$ 1,80 por Kg           R$ 1,50 por Kg

//     Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. 
//     Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

let qtdKgMorango = parseInt(prompt("Digite quantos kg voce quer de morango: "));
let qtdKgMaca = parseInt(prompt("Digite quantos kg voce quer de maçã: "));

let valorDescontoMorango = 0;
let valorTotalMorango = 0;

let valorDescontoMaca = 0;
let valorTotalMaca = 0;

if( qtdKgMorango <= 5 ) {

    valorTotalMorango = qtdKgMorango * 2.50;

    console.log(`O valor a ser pago do MORANGO sera de: R${valorTotalMorango}`);

}else if( qtdKgMorango > 5 ) {

    valorTotalMorango = qtdKgMorango * 2.20;

    console.log(`O valor a ser pago do MORANGO sera de: R${valorTotalMorango}`);

    if( valorTotalMorango > 25.00 ){

        valorDescontoMorango = valorTotalMorango - (valorTotalMorango / 100) * 10;

        console.log(`Voce ganhou um desconto de 10% na compra do MORANGO e pagará o valor de: R$${valorDescontoMorango}`);

    }

}

if( qtdKgMaca <= 5 ) {

    valorTotalMaca = qtdKgMaca * 1.80;

    console.log(`O valor a ser pago da MAÇÃ sera de: R${valorTotalMaca}`);

}else if( qtdKgMaca > 5 ) {

    valorTotalMaca = qtdKgMaca * 1.50;

    console.log(`O valor a ser pago da MAÇÃ sera de: R${valorTotalMaca}`);

    if( valorTotalMaca > 25.0 ) {

        valorDescontoMaca = valorTotalMaca - (valorTotalMaca / 100) * 10;

        console.log(`Voce ganhou um desconto de 10% na compra da MAÇÃ e pagará o valor de: R$${valorDescontoMaca}`);

    }

}
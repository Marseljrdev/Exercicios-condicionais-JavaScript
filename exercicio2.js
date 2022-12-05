// 9. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo)
// e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
// O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

//     Desconto do IR:
//     Salário Bruto até 900 (inclusive) - isento
//     Salário Bruto até 1500 (inclusive) - desconto de 5%
//     Salário Bruto até 2500 (inclusive) - desconto de 10%
//     Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

//     Salário Bruto: (5 * 220)        : R$ 1100,00
//     (-) IR (5%)                                : R$   55,00
//     (-) INSS ( 10%)                       : R$  110,00
//     FGTS (11%)                            : R$  121,00
//     Total de descontos                : R$  165,00
//     Salário Liquido                       : R$  935,00


let valorHora = Number.parseInt(prompt("Digite o valor da sua hora: R$ "));
let qtdHoras = Number.parseInt(prompt("Digite a quantidade de horas trabalhada: "));


let salarioBruto = valorHora * qtdHoras;

let descIr = 0;
let descInss = (salarioBruto / 100) * 10;
let descFgts = (salarioBruto / 100) * 11;
let totalDesconto = 0;
let salarioLiquido = 0;



if( salarioBruto <= 900 ) {

    salarioLiquido += salarioBruto;

    console.log('Isento de impostos');
    console.log(`Salario liquido é de: R$${salarioLiquido}`);

}else if( salarioBruto > 900 && salarioBruto <= 1500 ) {

    descIr = (salarioBruto / 100) * 5;

    totalDesconto = descIr + descInss + descFgts;
    salarioLiquido = salarioBruto - totalDesconto;

    console.log(`Salario bruto: R$${salarioBruto}`);
    console.log(`Deseconto de 5% do IR total de:  R$${descIr} `);
    console.log(`Desconto de 10% do INSS total de: R$${descInss}`);
    console.log(`Desconto de 11% do FGTS total de: R$${descFgts}`);
    console.log(`Total de descontos: R$${totalDesconto}`);
    console.log(`Salario liquido é de: R$${salarioLiquido}`);

}else if( salarioBruto > 2500) {

    descIr = (salarioBruto / 100) * 10;

    totalDesconto = descIr + descInss + descFgts;
    salarioLiquido = salarioBruto - totalDesconto;

    console.log(`Salario bruto: R$${salarioBruto}`);
    console.log(`Deseconto de 10% do IR total de:  R$${descIr} `);
    console.log(`Desconto de 10% do INSS total de: R$${descInss}`);
    console.log(`Desconto de 11% do FGTS total de: R$${descFgts}`);
    console.log(`Total de descontos: R$${totalDesconto}`);
    console.log(`Salario liquido é de: R$${salarioLiquido}`);

}else if( salarioBruto > 1500 && salarioBruto <= 2500 ) {

    descIr = (salarioBruto / 100) * 20;

    totalDesconto = descIr + descInss + descFgts;
    salarioLiquido = salarioBruto - totalDesconto;

    console.log(`Salario bruto: R$${salarioBruto}`);
    console.log(`Deseconto de 20% do IR total de:  R$${descIr} `);
    console.log(`Desconto de 10% do INSS total de: R$${descInss}`);
    console.log(`Desconto de 11% do FGTS total de: R$${descFgts}`);
    console.log(`Total de descontos: R$${totalDesconto}`);
    console.log(`Salario liquido é de: R$${salarioLiquido}`);

}






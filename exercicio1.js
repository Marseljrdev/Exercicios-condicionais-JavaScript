// 8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.
// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

let salarioAtual = Number.parseFloat(prompt("Digite o seu salario: "));
let valorAumento = 0;
let salarioNovo = 0;


console.log(`Seu salario antes do reajuste é de: R$${salarioAtual}`);

if( salarioAtual <= 280.00 ){
    
    valorAumento = salarioAtual * 0.20;
    salarioNovo = salarioAtual + valorAumento;
    console.log("O percentual de aumento aplicado foi de: 20%")
    console.log(`Valor do aumento foi de: R$${valorAumento}`);
    console.log(`O novo salario é de: R$${salarioNovo}`);

}else if( salarioAtual > 280.00 && salarioAtual <= 700.00 ) {

    valorAumento = salarioAtual * 0.15;
    salarioNovo = salarioAtual + valorAumento;
    console.log("O percentual de aumento aplicado foi de: 15%");
    console.log(`Valor do aumento foi de: R$${valorAumento}`);
    console.log(`O novo salario é de: R$${salarioNovo}`);

}else if( salarioAtual > 700.00 && salarioAtual <= 1500.00 ) {

    valorAumento = salarioAtual * 0.10;
    salarioNovo = salarioAtual + valorAumento;
    console.log("O percentual de aumento aplicado foi de: 10%");
    console.log(`Valor do aumento foi de: R$${valorAumento}`);
    console.log(`O novo salario é de: R$${salarioNovo}`);

    
}else if( salarioAtual > 1500.00 ) {

    valorAumento = salarioAtual * 0.05;
    salarioNovo = salarioAtual + valorAumento;
    console.log("O percentual de aumento aplicado foi de: 5%");
    console.log(`Valor do aumento foi de: R$${valorAumento}`);
    console.log(`O novo salario é de: R$${salarioNovo}`);

}


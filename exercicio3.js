// 18. Faça um script para um caixa eletrônico. O
// script deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
// O script não deve se preocupar com a quantidade de notas existentes na máquina.


//  Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
//  Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.


let valorUsuario = Number.parseInt(prompt("Digite o valor que deseja sacar: \n R$100 \n R$50 \n R$20 \n R$10 \n R$5 \n R$1 "));

let notasDisp = [100, 50, 20, 10, 5, 1];

if( valorUsuario < 10){

    alert('Voce nao pode sacar menos do que R$10,00');
    
}else if( valorUsuario > 600 ){

    alert('Voce nao pode sacar mais do que R$600,00');

}else {
    
    for( let i = 0; i < notasDisp.length; i++ ) {
    
        let totalNotas = parseInt( valorUsuario / notasDisp[i] );
        valorUsuario %= notasDisp[i];
    
        if( totalNotas !== 0 ){
            console.log(`${totalNotas} notas de ${notasDisp[i]},00`);
        }
    
    
    }

}


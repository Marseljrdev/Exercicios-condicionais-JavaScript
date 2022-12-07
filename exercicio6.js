// 21.  Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//     "Telefonou para a vítima?"
//     "Esteve no local do crime?"
//     "Mora perto da vítima?"
//     "Devia para a vítima?"
//     "Já trabalhou com a vítima?" 

//      O script deve no final emitir uma classificação sobre a participação da pessoa no crime.
//      Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". 
//      Caso contrário, ele será classificado como "Inocente".

let perguntaVitima = [];
let soma = 0;

perguntaVitima.push(parseInt(prompt("Telefonou para a vítima?  \n Digite: \n 1 - Sim \n 0 - Não")));
perguntaVitima.push(parseInt(prompt("Esteve no local do crime?  \n Digite: \n 1 - Sim \n 0 - Não")));
perguntaVitima.push(parseInt(prompt("Mora perto da vítima?  \n Digite: \n 1 - Sim \n 0 - Não")));
perguntaVitima.push(parseInt(prompt("Devia para a vítima?  \n Digite: \n 1 - Sim \n 0 - Não")));
perguntaVitima.push(parseInt(prompt("Já trabalhou com a vítima?  \n Digite: \n 1 - Sim \n 0 - Não" )));



for( let i in perguntaVitima ){

    soma = soma + perguntaVitima[i];

}

// console.log(soma);

if( soma < 2 ){

    console.log("Inocente");

}else if( soma == 2 ){

    console.log("Suspeita");

}else if( soma >= 3 && soma <= 4 ) {

    console.log("Cumplice");

}else if( soma == 5 ) {

    console.log("Assassino");

} 


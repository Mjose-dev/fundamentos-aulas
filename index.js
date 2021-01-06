// const readLine = require('readline');

// const terminal = readLine.createInterface({
//     input: process.stdin,
//     // definir o modo de entrada via terminal
//     output: process.stdout
// })

// // texto do menu
// const textoMenu = `
// Olá, seja bem vindo ao sistema de media
// Digite 1 para acessar o menu inicial
// Digite 2 para acessar o menu Herois
// Digite 3 para acessar o menu Guerreiras
// Digite 0 para sair
// `

// // const opcao = 1;
// // switch (opcao) {
// //     case 1:
// //         console.log('Pressionou 1')
// //         break
// //     case 2:
// //         console.log('Pressionou 2')
// //         break
// //     case 3:
// //         console.log('Pressionou 3')
// //         break
// //     case 4:
// //         console.log('Pressionou 0')
// //     default:
// //         console.log('Pressionou qualquer valor')
// // }

// const questoes = {
//     menuInicial: {
//         texto: textoMenu,
//         fn: menuInicial
//     },
//     opcao1: {
//         texto: 'subMenu ! Pressione enter para selecionar mais opções....',
//         fn: opcao1
//     }
// }

// function opcao1(msg) {
//     console.log('Não há mais opções!')
//     terminal.close()
// }

// function menuInicial(msg) {
//     const opcao = Number(msg)
//     if (isNaN(opcao)) {
//         throw new Error('Não é um número', msg)
//     }

//     switch (opcao) {
//         case 0:
//             console.log('Saindo...')
//             terminal.close()
//             break;
//         case 1:
//             console.log('Menu Inicial')
//             terminal.question(
//                 questoes.opcao1.texto,
//                 questoes.opcao1.fn
//             )
//             break;
//         default:
//             console.log('opcao invalida')
//             terminal.close()
//             break;
//     }

// }

// terminal.question(
//     questoes.menuInicial.texto,
//     questoes.menuInicial.fn
// )



lista = [
    {
        nome: 'Matheus',
        idade: 23
    },
    {
        nome: 'Jhuana',
        idade: 23
    }
]


for (let i = 0; i < lista.length; i++) {
    console.log('For', lista[i])
}

for (item in lista) {
    console.log('For in', lista[item])
}

for (item of lista) {
    console.log('For of', item)
}

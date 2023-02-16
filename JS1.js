let faturamentomes = parseInt (prompt("Seja bem vindo à atividade 04 complementar do grupo do Gabriel e Warlen! Essa é uma calculadora de custo por hora para freelancers! Primeiro, digite o valor numérico do quanto você quer faturar por mês com seus serviço de freelancer:"))
let horas = parseInt (prompt("Ótimo! Agora, digite o número de horas por dia que você planeja trabalhar:"))
let dias = parseInt (prompt("Certo. E você pretende trabalhar em quantos dias da semana?"))
let ferias = parseInt (prompt("Por fim, quantas semanas de férias você planeja tirar no ano?"))

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

alert ("Nossa calculadora entende as horas do mês que você planeja trabalhar, descontando o período de férias estipulado. Com os parâmetros colocados por você, o custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00. Até a próxima atividade!")
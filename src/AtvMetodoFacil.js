/*
  * Exercício 2
  *
  * Copie o personagem do exercício 1, e adicione nele um método chamado
  * "tocarMusica", que recebe o nome de uma música e a letra desta música.
  *
  * Ao ser chamado, o personagem deve exibir o texto abaixo, substituindo
  * os valores entre colchetes pelos valores do nome da música e sua letra.
  *
  * "
  * Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
  * uma música para trazer ânimo a seus corpos e esperança para seus corações.
  * Apresento-lhes a música [musica].
  *
  * Em 1, 2, 3
  * ...
  * [letra]
  * "
  *
  * Lembre-se de exportar o objeto do personagem no final do código.
  */

 const personagem = {
  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro",
  "capa de couro", "chapéu de pena"],
  pontosDeVida: 100,
  pontosDeMagia: 100,
  moedasDeOuro: 20,
  moedasDePrata: 43,
  moedasDeBronze: 125,
  pocoesCura: 7,
  pocoesMagia: 5
  }

  export default personagem
  
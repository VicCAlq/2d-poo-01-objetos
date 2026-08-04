/*
  * Exercício 3
  *
  * Copie o personagem do exercício 2, e mude os "pontosDeVida" dele 
  * de "100" para "30".
  * 
  * Após cantar a música no exercício 2, a platéia não gostou nada e moeu
  * o personagem na pancada, reduzindo seus "pontosDeVida".
  *
  * Crie agora um método onde o personagem pode consumir uma poção
  * que ele possua para recuperar sua vida para o valor total.
  *
  * O método deve além de curar os pontos de vida, deve também remover uma 
  * das poções de seu inventário.
  *
  * Lembre-se de exportar o objeto do personagem no final do código.
  */
const personagem = {
  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,
  equipamento: [
    "arco",
    "violão",
    "gaita",
    "flechas de aço",
    "botas de couro",
    "capa de couro",
    "chapéu de pena",
  ],
  pontosDeVida: 30,      //  Levou uma surra da platéia
  pontosDeMagia: 100,
  moedas: { ouro: 20, prata: 43, bronze: 125 },
  pocoes: { cura: 7, magia: 5 },

  usarPocaoDeCura() {
    if (this.pocoes.cura > 0) {
      this.pontosDeVida = 100;
      this.pocoes.cura -= 1;
      console.log(Poção usada! Vida restaurada para ${this.pontosDeVida}. Poções restantes: ${this.pocoes.cura});
    } else {
      console.log("Sem poções de cura disponíveis!");
    }
  },
};

export default personagem;




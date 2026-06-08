/*
  * Exercício 4
  *
  * Copie o personagem do exercício 3 para esta questão, e mude a
  * quantidade de poções de cura do personagem para 0.
  * 
  * Após tentar sua performance em 8 vilarejos diferentes, em quase
  * todos ele apanhou, e terminou gastanto todas as suas poções de cura
  * para não partir desta para uma melhor. Agora ele precisa comprar mais
  * poções de cura.
  *
  * Crie um método onde o personagem gasta parte de seu dinheiro para
  * comprar poções de cura. Cada poção de cura custa 15 moedas de prata.
  * Este método recebe como argumento a quantidade de poções compradas.
  *
  * A relação entre cada dinheiro:
  * 10 moedas de bronze = 1 moeda de prata
  * 10 moedas de prata = 1 moeda de ouro
  *
  * O método deve fazer a conversão entre moedas caso não haja o suficiente
  * da moeda adequada, e descontar o valor das poções do dinheiro do personagem.
  *
  * Exemplo:
  * ouro = 3 moedas
  * prata = 34 moedas
  * bronze = 20 moedas
  *
  * poções compradas = 4
  * Valor total das poções = 60 moedas de prata
  * Converta 3 moedas de ouro para 30 moedas de prata, para um total de
  * 64 moedas de prata, e subtraia o valor das 4 poções das moedas
  * de prata do personagem. Após isso, adicione as poções compradas na lista
  * de poções do personagem.
  *
  * Caso o personagem não tenha dinheiro suficiente para comprar a 
  * quantidade informada de poções, o método deve imprimir o texto
  * "Você não tem dinheiro o suficiente, meu caro. Quer fazer um empréstimo?"
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
  pontosDeVida: 30,
  pontosDeMagia: 100,
  moedas: { ouro: 20, prata: 43, bronze: 125 },
  pocoes: { cura: 0, magia: 5 },

  usarPocaoDeCura() {
    if (this.pocoes.cura > 0) {
      this.pontosDeVida = 100;
      this.pocoes.cura -= 1;
      console.log(`Poção usada! Vida restaurada para ${this.pontosDeVida}. Poções restantes: ${this.pocoes.cura}`);
    } else {
      console.log("Sem poções de cura disponíveis!");
    }
  },

  comprarPocoesDeCura(quantidade) {
    const custoPrata = quantidade * 15;

    // Converte tudo para prata
    let totalPrata = this.moedas.prata
      + (this.moedas.ouro * 10)
      + Math.floor(this.moedas.bronze / 10);

    if (totalPrata < custoPrata) {
      console.log("Você não tem dinheiro o suficiente, meu caro. Quer fazer um empréstimo?");
      return;
    }

    // Desconta o custo do total em prata
    totalPrata -= custoPrata;

    // Redistribui as moedas a partir do total em prata
    this.moedas.ouro = Math.floor(totalPrata / 10);
    this.moedas.prata = totalPrata % 10;
    this.moedas.bronze = this.moedas.bronze % 10; // bronze que não virou prata permanece

    this.pocoes.cura += quantidade;

    console.log(`Compra realizada! +${quantidade} poções de cura.`);
    console.log(`Poções de cura: ${this.pocoes.cura}`);
    console.log(`Moedas restantes — Ouro: ${this.moedas.ouro} | Prata: ${this.moedas.prata} | Bronze: ${this.moedas.bronze}`);
  },
};

export default personagem;
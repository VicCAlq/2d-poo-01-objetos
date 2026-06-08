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

const Personagem = {

  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,

  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro", "capa de couro", "chapéu de pena"],

  pontosDeVida: 100,
  pontosDeMagia: 100,
  
  moedas: ["20 moedas de ouro", "43 moedas de prata", "125 moedas de bronze"],

  pocoes: ["7 de cura", "5 de magia"]
}

const musica = {
  function tocarMusica(musica, letra){
    musica: "So long - Yongakor"
    letra: "Please check your pockets
For the pass you'll need, my dear
A ticket with your name, your seat
And where you'll go from here
If you have any questions then I'll be all ears
Can't promise any answers
But I hope to ease your fears

Are you worried 'bout your family?
Are you worried 'bout your friends?
I could only say that I hope you'll all meet again
It's hard to stay apart
I know it breaks your heart

The whistle blows, it's your time to depart

And now I'll wave so long
The train will shortly move along
The last time we'll meet
Through the window by your seat
Hum your favorite song
The one you'd sing along
As you walked down your own road
With the hope to stay remembered as you go
Remembered as you go

Please check your pockets
For the pass you'll need, my dear
A ticket with your name, your seat
And where you'll go from here
I'll stow your luggage there so it won't interfere
Can't promise they'll be lighter
When you make it out from here

Any aspirations incomplete?
Any unfulfilled desires?
Regretfully, those dreams
You'll have to leave behind
You all played your parts
I know it breaks your heart

The whistle blows, it's your time to depart

And now I'll wave so long
The train will shortly move along
The last time we'll meet
Through the window by your seat
Hum your favorite song
The one you'd sing along
As you walked down your own road
With the hope to stay remembered as you go

I still don't understand
Why creatures live and die
They love and hate, they recreate
And some will toy with fate
I've never once been forced to smile
To cry or say goodbye
I could only hope they found joy in their lives

And now I'll wave so long
The train will shortly move along
The last time we'll meet
Through the window by your seat
Hum your favorite song
The one you'd sing along
As you walked down your own road
With the hope to stay remembered as you go
Remembered as you go
Woah-oh, la-la-la-la-la"
  }
}

tocarMusica

export default Personagem
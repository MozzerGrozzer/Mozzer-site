document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "Hello World!",
    "Adoro Gatos!",
    "Dribbble é uma bola de basquete!",
    "'As coisas são difíceis, é difícil' by: Lucas Correia",
    "Status: Provavelmente fazendo um personagem novo",
    "Contrario do que acham, Nibbiz é fofa!",
    "run the jewels fast run the run the jewels fast!",
    "Mozzer Grozzer",
    "Deep Down i wish you was mine",
    "Mais 20 Commits para o Github!",
    "git push --force",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D",
    "Git Commit -m 'Adoro Gatos'",
    "'Uma lince emocionalmente frágil e uma morcega irada entram na loja de conveniência do posto de gasolina de um velho miope'",
    "Como o Sexto se tornou perfeito???",
    "Amonng Us",
    "Mentira Vevo",
    "Grozzer Mozzer",
  ];

  const titulo = document.querySelector("main > h1");
  if (titulo) {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    titulo.textContent = fraseAleatoria;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mural = document.querySelector(".mural");

  const imagens = {
    portfolio: [
      "Bestie-naz-amarela-roxa.png", 
      "bro-on-the-hero-arc.jpg",
      "cachorro-do-inverno-infernal-do-inverno.jpg",
      "Cato_Postingtop10.png",
      "Cindie-e-as-amiga.jpg",
      "Cindie-sem-ninguem-triste.jpg",
      "e combate carro lol.png",
      "esse angulo da bike foi horrivel de fazer.png",
      "esse eu so fui na vibe tlg.png",
      "eu-realmente-trabalho-num-mec-nao-me-julgue.jpg",
      "eu-sou-assim-irl.jpg",
      "gee-my-beloves.jpg",
      "itiel-gosta-de-gato-preto-azar-isso-ai-viu.jpg",
      "jump-wwisp-wisp-scare-scarre-da-will.png",
      "kota-but-based.jpg",
      "omggggggggg.jpg",
      "omggggggggggg.jpg",
      "propagandas-para-katekate.jpg",
      "vice-magazine-balck.jpg",
    ],
    memes: [
      "Captura de tela 2025-05-02 124224.png",
      "Captura de tela 2025-03-27 203941.png",
      "Captura de tela 2025-03-27 205412.png",
      "Captura de tela 2025-01-27 220819.png",
      "i-gonna-eat-your-babies-i-gonna-eat-em-all.jpg",
      "isso-me-lembra-meus-dias-de-crepusculo.jpg",
      "ja-era-people-pack-up-your-things.jpg",
    ],
    rascunhos: [
      "Captura de tela 2024-11-14 162600.png",
      "Captura de tela 2025-01-31 210532.png",
      "Captura de tela 2025-02-03 195222.png",
      "Captura de tela 2025-02-04 212918.png",
      "Captura de tela 2025-02-05 172957.png",
      "Captura de tela 2025-02-12 194933.png",
      "Captura de tela 2025-02-24 145608.png",
      "Captura de tela 2025-02-24 145608.png",
      "Captura de tela 2025-02-24 145858.png",
      "Captura de tela 2025-03-02 230524.png",
      "Captura de tela 2025-03-02 230602.png",
      "Captura de tela 2025-03-11 191108.png",
      "Captura de tela 2025-03-20 155345.png",
      "Captura de tela 2025-03-25 171309.png",
      "Captura de tela 2025-03-25 171442.png",
      "Captura de tela 2025-03-25 171451.png",
      "Captura de tela 2025-03-25 171451.png",
      "Captura de tela 2025-03-27 161013.png",
      "Captura de tela 2025-04-03 101707.png",
      "Captura de tela 2025-04-11 223444.png",
      "Captura de tela 2025-04-11 230715.png",
      "Captura de tela 2025-04-16 185159.png",
      "Captura de tela 2025-04-17 123850.png",
      "Captura de tela 2025-04-17 175710.png",
      "Captura de tela 2025-04-19 093300.png",
      "Captura de tela 2025-05-23 235800.png",
      "Captura de tela 2025-06-01 142625.png",
    ]
  };

  function carregarCategoria(categoria) {
    mural.innerHTML = "";
    if (!imagens[categoria]) return;

    imagens[categoria].forEach(nome => {
      const img = document.createElement("img");
      img.src = `../assets/${categoria}/${nome}`;
      img.alt = "Arte da categoria";
      img.loading = "lazy";
      mural.appendChild(img);
    });
  }

  // Começa com 'portfolio'
  carregarCategoria("portfolio");

  document.querySelectorAll(".muralSettings").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const categoria = link.dataset.categoria;
      carregarCategoria(categoria);
    });
  });
});


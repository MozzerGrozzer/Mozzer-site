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
      "Bestie-naz-amarela-roxa.png"
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
    if (!imagens[categoria]) {
      console.warn(`Categoria "${categoria}" não encontrada`);
      return;
    }

    imagens[categoria].forEach(nome => {
      const img = document.createElement("img");
      let path = `../assets/${categoria}/${nome}`;
      console.log(path);
      
      img.src = path;
      img.alt = "Arte da categoria";
      img.loading = "lazy";
      
      // Adicionar tratamento de erro para imagens que falham ao carregar
      img.onerror = () => {
        console.warn(`Falha ao carregar imagem: ${nome}`);
        img.style.display = "none"; // Oculta a imagem que falhou
      };
      
      mural.appendChild(img);
    });
  }

  // Começa com 'portfolio'
  carregarCategoria("portfolio");

  // Corrigido: selecionar apenas os links que têm data-categoria
  document.querySelectorAll("a[data-categoria]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const categoria = link.dataset.categoria;
      console.log("Categoria selecionada:", categoria); // Debug
      carregarCategoria(categoria);
    });
  });
});


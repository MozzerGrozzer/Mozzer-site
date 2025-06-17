const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria") || "portfolio";
const imagens = [
  "Captura de tela 2024-11-14 162600.png",
  "Captura de tela 2025-01-27 220819.png",
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
  "Captura de tela 2025-03-27 203941.png",
  "Captura de tela 2025-03-27 205412.png",
  "Captura de tela 2025-04-03 101707.png",
  "Captura de tela 2025-04-11 223444.png",
  "Captura de tela 2025-04-11 230715.png",
  "Captura de tela 2025-04-16 185159.png",
  "Captura de tela 2025-04-17 123850.png",
  "Captura de tela 2025-04-17 175710.png",
  "Captura de tela 2025-04-19 093300.png",
  "Captura de tela 2025-05-02 124224.png",
  "Captura de tela 2025-05-23 235800.png",
  "Captura de tela 2025-06-01 142625.png",
];

const mural = document.querySelector(".mural");
if (mural && imagens.length) {
  imagens.forEach(imgNome => {
    const img = document.createElement("img");
    img.src = `../assets/${categoria}/${imgNome}`;
    img.alt = "Arte";
    mural.appendChild(img);
  });
}

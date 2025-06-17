document.querySelectorAll(".desbloquear").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".arte-blurada").classList.add("desbloqueada");
    btn.remove();
  });
});
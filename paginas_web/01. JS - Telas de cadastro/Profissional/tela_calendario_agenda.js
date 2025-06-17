// Abrir modal
document.getElementById("addNotasBtn").onclick = function() {
  document.getElementById("modalNotas").style.display = "block";
}

// Fechar modal ao clicar no X
document.querySelector(".close").onclick = function() {
  document.getElementById("modalNotas").style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
  const modal = document.getElementById("modalNotas");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
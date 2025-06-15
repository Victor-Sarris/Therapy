// Funções para o pop-up de Meet
function showMeetPopup() {
  document.getElementById('meetPopup').style.display = 'flex';
}

// Função para abrir o chat
function openChat() {
  hideMeetPopup(); // Fecha o popup
  window.location.href = 'tela_msg_cliente.html'; // Redireciona para a tela de mensagens
}

function hideMeetPopup() {
  document.getElementById('meetPopup').style.display = 'none';
}

// Fechar pop-up ao clicar fora dele
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('meetPopup');
  
  popup.addEventListener('click', function(e) {
    if (e.target === this) {
      hideMeetPopup();
    }
  });

  // Fechar pop-up com a tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideMeetPopup();
    }
  });
});
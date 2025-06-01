const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalTextarea = document.getElementById('modal-textarea');
const saveBtn = document.getElementById('save-btn');
const closeBtn = document.querySelector('.close');

function abrirModal(tipo, prontuario) {
  modalTitle.textContent = tipo === 'visualizar' ? 'Visualizar Prontuário' : 'Editar Prontuário';
  if (tipo === 'visualizar') {
    modalBody.textContent = prontuario;
    modalTextarea.style.display = 'none';
    saveBtn.style.display = 'none';
  } else {
    modalBody.textContent = '';
    modalTextarea.style.display = 'block';
    modalTextarea.value = prontuario;
    saveBtn.style.display = 'inline-block';
    modalTextarea.focus();
  }
  modal.style.display = 'block';
}

// Evento para o ícone "Visualizar" (eye)
document.querySelectorAll('.fa-eye').forEach(eyeIcon => {
  eyeIcon.addEventListener('click', function() {
    abrirModal('visualizar', this.dataset.prontuario);
  });
});

// Evento para o ícone "Editar" (edit)
document.querySelectorAll('.fa-edit').forEach(editIcon => {
  editIcon.addEventListener('click', function() {
    abrirModal('editar', this.dataset.prontuario);
  });
});

// Fechar modal
closeBtn.onclick = () => modal.style.display = 'none';

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});

saveBtn.addEventListener('click', () => {
  alert('Prontuário salvo: ' + modalTextarea.value);
  modal.style.display = 'none';
});
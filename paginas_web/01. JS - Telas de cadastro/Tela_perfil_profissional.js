// Sidebar collapse for mobile
const menuBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Animação de entrada dos info-blocks
// (Apenas define o delay para cada bloco)
document.querySelectorAll('.info-block').forEach((block, i) => {
    block.style.animationDelay = (0.1 + i * 0.12) + 's';
});

// Temas clicáveis
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});
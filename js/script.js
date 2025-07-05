//aparecer nomes ao clicar
const toggle = document.getElementById('drop1');
const submenu = document.getElementById('sub1');

toggle.addEventListener('click', function (e) {
e.preventDefault(); 
submenu.classList.toggle('active'); 
});

// fecha o meun se clicar fora dele
window.addEventListener('click', function (e) {
if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
    submenu.classList.remove('active');
}
});


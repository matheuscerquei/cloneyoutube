const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!localStorage.getItem("logado")) {
    window.location.href = "login.html";
}

document.getElementById("nomeUsuario").textContent = "Nome: " + usuario.nome;
document.getElementById("emailUsuario").textContent = "Email: " + usuario.email;

function logout() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}
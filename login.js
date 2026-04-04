const form = document.getElementById("login-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = form.querySelector("input[type='email']").value;
    const senha = form.querySelector("input[type='password']").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (
        usuarioSalvo &&
        email === usuarioSalvo.email &&
        senha === usuarioSalvo.senha
    ) {
        localStorage.setItem("logado", "true");

        window.location.href = "index.html";
    } else {
        alert("Email ou senha incorretos ❌");
    }
});
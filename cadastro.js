const formCadastro = document.getElementById("cadastro-form");

formCadastro.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Conta criada com sucesso! 💖");

    window.location.href = "login.html";
});
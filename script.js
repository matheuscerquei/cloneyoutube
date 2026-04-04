const form = document.getElementById("form-agendamento");
const mensagem = document.getElementById("mensagem");
const botaoTema = document.querySelector(".tema-btn");
const iconeTema = botaoTema.querySelector("i");

/* ===== FORMULÁRIO ===== */
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    mensagem.textContent = `✅ Agendamento realizado com sucesso, ${nome}! 💖`;

    form.reset();
});

/* ===== MODO ESCURO ===== */
function trocarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");
    } else {
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
    }
}
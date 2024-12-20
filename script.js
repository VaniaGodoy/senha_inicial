// Função para validar o nome completo
function validarNome(nome) {
    return nome.trim().includes(" ");
}

// Função para obter o último sobrenome em letras minúsculas
function obterSobrenome(nome) {
    const partes = nome.trim().split(" ");
    return partes[partes.length - 1].toLowerCase();
}

// Função para contar o número de vogais no nome
function contarVogais(nome) {
    const vogais = "aeiouAEIOU";
    const contador = Array.from(nome).filter(char => vogais.includes(char)).length;
    return String(contador).padStart(2, "0"); // Garante dois dígitos
}

// Função principal para gerar a senha inicial
function gerarSenha(nome) {
    const sobrenome = obterSobrenome(nome);
    const quantidadeVogais = contarVogais(nome);
    return `${sobrenome}${quantidadeVogais}`;
}

// Lógica do formulário
document.getElementById("gerarSenha").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!validarNome(nome)) {
        resultadoDiv.innerHTML = "Por favor, insira um nome completo (nome e sobrenome).";
        resultadoDiv.style.color = "#fa2626";
        return;
    }

    const senha = gerarSenha(nome);
    resultadoDiv.innerHTML = `Senha Inicial:  <span class="senha">${senha}</span>`;
    resultadoDiv.style.color = "#545454";
});


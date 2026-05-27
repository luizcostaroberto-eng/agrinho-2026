function verificar(resposta) {
    const resultado = document.getElementById('resposta');
    if (resposta === 'certa') {
        resultado.textContent = "Parabéns! Você acertou!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Ops! Essa não é sustentável. Tente novamente!";
        resultado.style.color = "red";
    }
}

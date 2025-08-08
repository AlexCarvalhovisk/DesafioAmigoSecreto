let listaDeAmigos = [];
const input = document.getElementById('amigo');
const mensagem = document.getElementById('mensagem');

//Impede do usuário poder digitar números
input.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault();
        exibirMensagem('O campo deve conter apenas letras.', 'erro');
    }
});

//Impede do usuário colar números
input.addEventListener('input', function () {
    const valorLimpo = this.value.replace(/[0-9]/g, '');
    if (this.value !== valorLimpo) {
        exibirMensagem('Não é permitido colar números.', 'erro');
        this.value = valorLimpo;
    }
});

function adicionarAmigo() {
    const nome = input.value.trim();

    if (nome === '') {
        exibirMensagem('Por favor, digite o nome do amigo.', 'erro');
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        exibirMensagem('Este nome já foi adicionado!', 'erro');
        input.value = '';
        return;
    }

    //Aqui adiciono o amigo na lista.
    listaDeAmigos.push(nome);
    input.value = '';
    input.focus();
    //console.log(listaDeAmigos);
    //mostrarListaTela();
    //exibirMensagem(`Amigo ${nome} foi adicionado com sucesso!`, 'sucesso');
}

//Aqui manipulei a mensagem pra aparecer erro ou sucesso na cor que eu quero na tela.
function exibirMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
}
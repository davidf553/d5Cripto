let textAreaInput = document.querySelector('.textarea-input');
let textAreaOutput = document.querySelector('.textarea-output');

function alterarTextAreaCriptografado() {
    document.querySelector('.container__textarea__vazio').setAttribute('style', 'display: flex');
    document.querySelector('.container__textarea__direita').setAttribute('style', 'display: none');
};

function limparTextAreaInput() {
    document.querySelector(".container__textarea__vazio").setAttribute("style", "display: none");
    document.querySelector(".container__textarea__direita").setAttribute("style", "display:flex");
    textAreaInput.value = '';
};

function verificarLetraMaiuscula(texto) {
    if(Boolean(texto.match(/[A-Z]/))){
        return true;
    }else{
        return false;
    }
}

function verificarCaractereEspecial(texto) {
    const caracteresEspeciais = /[!@#$%^&*()":;{}|<>]/;
    const caracteresAcentuados = /[À-ÖØ-öø-ÿ]/; 
    const contemNumeros = /\d/;
    return caracteresEspeciais.test(texto) || caracteresAcentuados.test(texto) || contemNumeros.test(texto);
}

function criptografarTexto() {
    let texto = textAreaInput.value;
    if (verificarLetraMaiuscula(texto)) {
        alert('A palavra não pode ter letras maiúsculas.');
        limparTextAreaInput();
        alterarTextAreaCriptografado();
        return;
    }
    
    let textoCriptografado = window.btoa(texto);
    textAreaOutput.value = textoCriptografado;
    alterarTextAreaCriptografado();
    limparTextAreaInput();
}

function descriptografarTexto() {
    let textoDescriptografado = window.atob(textAreaInput.value);
    textAreaOutput.value = textoDescriptografado;
    alterarTextAreaCriptografado();
    limparTextAreaInput();
}

async function copiarTextoCriptografado() {
    let textoCriptografado = document.querySelector('.textarea-output').value;
    try {
        await navigator.clipboard.writeText(textoCriptografado);
        textAreaInput.value = textoCriptografado;
        alert('Texto copiado para a caixa de texto principal e a área de transferência!!!');
    } catch (erro) {
        console.error('Falha ao copiar o texto criptografado: ', erro);
        alert('Falha ao copiar o texto criptografado. Verifique o console para mais detalhes.');
    }
}
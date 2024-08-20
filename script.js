const textArea = document.querySelector(".text__area");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar()
{
    const textoDescriptografado = criptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}

function criptografar(stringDescriptografada) 
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringDescriptografada;
}

function btnDescriptografar() 
{
    const textoCriptografado = descriptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function descriptografar(stringCriptografada)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][1])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringCriptografada;
}

function btnCopiar() {
    window.navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
}


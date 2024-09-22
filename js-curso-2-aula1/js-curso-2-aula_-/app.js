let numeroSecreto = 5;
let tentativas = 5;



function exibirTextoNaTela(tag, texto){

let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2})

}

function exibirMensagemInicial() {
    
exibirTextoNaTela(`h1`, `jogo secreto do mozart`);
exibirTextoNaTela(`p`, `Escolha um numero entre 1 e 10`);


}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){

    chute = document.querySelector(`input`);
    chute.value = ``;

}

function verificarChute(){
    
    let chute = document.querySelector(`input`).value;

    if (chute == numeroSecreto || chute < numeroSecreto && chute > numeroSecreto){
        exibirTextoNaTela(`h1`, `acertou`);
    let palavraTentativaAcertou = tentativas > 1 ? `tentativas` : `tentativa`;

    let mensagemTentativas =  `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativaAcertou}`;
        exibirTextoNaTela(`p`, mensagemTentativas)
        document.getElementById(`reiniciar`).removeAttribute('disabled');
    } else {  
      
        let palavraTentativaErrou = tentativas > 1 ? `tentativas` : `tentativa`;

    let mensagemTentativas =  `Voce errou o numero secreto com ${tentativas} ${palavraTentativaErrou}`;
        exibirTextoNaTela(`p`, mensagemTentativas)

        exibirTextoNaTela(`h1`, `errou`)
        exibirTextoNaTela(`p`, mensagemTentativas)
tentativas--
limparCampo();

    } 
          
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);

}


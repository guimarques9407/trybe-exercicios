// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const resultadoSorteio = (numeroApostado,callback) => {
    let numeroSorteado = randomNumber();
    console.log(numeroSorteado,numeroApostado)
    if(callback(numeroSorteado,numeroApostado)){
        return "Parabéns você ganhou"
    }
    else{
        return "Tente novamente"
    }
}

const checkResult = (numeroSorteado,numeroApostado) => {
    return numeroSorteado === numeroApostado;
}

const randomNumber = () => {
    return Math.floor(Math.random() * 5 ) + 1
}

console.log(resultadoSorteio(randomNumber(),checkResult))
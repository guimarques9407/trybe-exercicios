let array = ['java', 'js', 'python', 'html', 'css'];

let menorPalavra=array[0].length
let maiorPalavra=array[0].length

for(let word of array){
    if(word.length>maiorPalavra){
        maiorPalavra=word
    }
    if(word.length<menorPalavra){
        menorPalavra=word
    }
}

console.log(menorPalavra,maiorPalavra);
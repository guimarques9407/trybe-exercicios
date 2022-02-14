//     *
//    **
//   ***
//  ****
// *****

let n = 5;

let linha = "";

for (let index = 1; index <= n; index++) {
  for (let index2 = 1; index2 <= (n - index); index2++) {
    linha += " ";
  }
  for (let index3 = 1; index3 <= index; index3++) {
    linha += "*";
  }
  console.log(linha);
  linha=""
}

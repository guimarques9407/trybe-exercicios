// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callback) => {
    const employees = {
      id1: callback("Wagner Alberto","wagneralberto@gmail.com"),
      id2: callback("Luiza drumond","luizadrumond@gmail.com"),
      id3: callback("Carla Paiva", "carlapaiva@gmail.com"), 
    }
    return employees;
  };


const employee = (nome,email) => {
    return {nome,email}
}

console.log(newEmployees(employee))


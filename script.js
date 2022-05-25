const students = [
  {
    name: "Luiz",
    nota1: 2,
    nota2: 6,
  },
  {
   name: "Ana",
   nota1: 2,
   nota2: 6,
  },
  {
   name: "Marcus",
   nota1: 8,
   nota2: 10,
  },
  {
    name: "Nicole",
    nota1: 10,
    nota2: 10,
  },
]

function Media(nota1, nota2) {
  return ((nota1 + nota2)/2).toFixed(2)
}

function PrintMassege(students) {
  if (((students.nota1 + students.nota2)/2) < 6) {
    return `A média do aluno(a) ${students.name} é ${Media(students.nota1, students.nota2)}. 
Não foi dessa ver ${students.name}, tente novamente!`
  } else {
    return `A média do aluno(a) ${students.name} é ${Media(students.nota1, students.nota2)}.
Parabéns ${students.name}, você foi aprovado(a) no concurso!`
  }  
}

for(let student of students) {
 let InfoMessege = PrintMassege(student)
 alert(InfoMessege)
}
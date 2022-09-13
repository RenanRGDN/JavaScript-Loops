let ageText = prompt ('digite a sua idade:');
let age = Number (ageText);

while (age<18) {
    ageText = prompt ('o site só pode ser acessado por maiores de idade! digite a sua idade novamente');
    age = Number (agetext);
}

document.write('seja bem vindo ao site')

let option;
do{
    option = Number (prompt ('escolha uma opção:\n\n1 - Caviar\n2 - Almondega\n3 - File de frango'))
}while (option < 1 || option >3)

document.write ('<br><br>')
switch (option) {
case 1:
    document.write('Escolheu caviar, mas levou pão com ovo')
    break
case 2:
    document.write('Escolheu Almondega, mas levou linguiça')
    break 
case 3: 
    document.write('Escolheu file de frango, mas levou agua')
    break
}

    
const boletim = [];
const qtdMaterias = 3;
const qtdProvas = 3;

for (let i = 0; i< qtdMaterias; i++){
    boletim[i] = [];
    for (let j = 0; j < qtdProvas; j++){
        const nota = prompt (`Digite a nota da ${j + 1}ª prova da ${i + 1}ª materia`);
        boletim[i][j] = Number(nota);
    }
}
for (let i=0; i <qtdMaterias; i++){
    document.write (`<br>${i+1}ª Matéria:`);
    for (let j = 0; j<qtdProvas; j++){
        document.write(`${boletim[i][j]}`);

    }
}
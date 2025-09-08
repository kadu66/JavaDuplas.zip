// 2) SWITCH

// A variável 'opcao' representa uma escolha feita pelo usuário
let opcao = 2;

// O switch compara o valor da variável e executa o caso correspondente
switch (opcao) {
 case 1: // Se a opção for 1
  console.log("Você escolheu a opção 1: Mostrar saudação.");
  break; // Encerra o switch, se não tiver o break, ele executara todos os casos
 case 2: // Se a opção for 2
  console.log("Você escolheu a opção 2: Mostrar idade.");
  break;
 case 3: // Se a opção for 3
  console.log("Você escolheu a opção 3: Encerrar.");
  break;
 default: // Caso nenhuma das opções anteriores seja escolhida
  console.log("Opção inválida.");
  break;
}
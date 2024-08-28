const arrayDesordenado = [7, -5, 0, 3, 2, 1, 4, 6, 8, 9];

function findSmallest(array: number[]): number {
  let menorElemento = array[0];
  let menorIndice = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < menorElemento) {
      menorElemento = array[i];
      menorIndice = i;
    }
  }

  return menorIndice;
}

function selectionSort(array: number[]): number[] {
  const novoArray = [];

  while (array.length > 0) {
    const menor = findSmallest(array);
    novoArray.push(array.splice(menor, 1)[0]);
  }

  return novoArray;
}

console.log(selectionSort(arrayDesordenado));

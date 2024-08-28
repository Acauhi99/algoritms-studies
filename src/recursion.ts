const chave = 10;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buscaBinaria(
  arr: number[],
  chave: number,
  inicio: number = 0,
  fim: number = arr.length - 1
): number | undefined {
  if (inicio > fim) {
    return undefined;
  }

  const meio = Math.floor((inicio + fim) / 2);

  if (arr[meio] === chave) {
    return meio;
  }

  if (arr[meio] < chave) {
    return buscaBinaria(arr, chave, meio + 1, fim);
  }

  if (arr[meio] > chave) {
    return buscaBinaria(arr, chave, inicio, meio - 1);
  }

  return undefined;
}

console.log(buscaBinaria(arr, chave));

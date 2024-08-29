const vetor = [5, 3, -7, 0, 10, 13];

function quickSort(vetor: number[]): number[] {
  if (vetor.length < 2) {
    return vetor;
  }

  const menoresPivot: number[] = [];
  const maioresPivot: number[] = [];

  const pivotIndex = Math.floor(vetor.length / 2);
  const pivot = vetor[pivotIndex];

  for (let i = 0; i < vetor.length; i++) {
    if (i === pivotIndex) continue;
    if (vetor[i] < pivot) {
      menoresPivot.push(vetor[i]);
    } else {
      maioresPivot.push(vetor[i]);
    }
  }

  return [...quickSort(menoresPivot), pivot, ...quickSort(maioresPivot)];
}

console.log(quickSort(vetor));

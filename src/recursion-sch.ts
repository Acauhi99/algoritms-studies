const vetSum = [10, 15, 30];
const vetCount = [10, 15, 30];
const vetHighest = [10, 15, 30];

function sum(vet: number[], acc: number): number {
  if (vet.length === 0) {
    return acc;
  }

  const lastElement = vet.pop()!;
  return sum(vet, acc + lastElement);
}

function count(vet: number[], quantiti: number): number {
  if (vet.length === 0) {
    return quantiti;
  }

  vet.pop();
  return count(vet, quantiti + 1);
}

function hightestElement(vet: number[], high: number): number {
  if (vet.length === 0) {
    return high;
  }

  const lastElement = vet.pop()!;

  if (lastElement > high) {
    high = lastElement;
  }
  return hightestElement(vet, high);
}

console.log(sum(vetSum, 0));
console.log(count(vetCount, 0));
console.log(hightestElement(vetHighest, vetHighest[0]));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 10;

function binarySearch(array: number[], target: number): number | undefined {
  let inital = 0;
  let end = array.length - 1;

  while (inital <= end) {
    const mid = Math.floor((inital + end) / 2);
    const atempt = array[mid];

    if (atempt === target) {
      return mid;
    }

    if (atempt > target) {
      end = mid - 1;
    } else {
      inital = mid + 1;
    }

    return undefined;
  }
}

const result = binarySearch(array.sort((a, b) => a -  b), target);
console.log(`O indice no array onde se encontra o numero ${target} eh: ${result}`);

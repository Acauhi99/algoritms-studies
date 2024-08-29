function hashMap(args: string, hashSize: number): number {
  const primeMap: { [key: string]: number } = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
  };

  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    const char = args[i].toLowerCase();
    if (primeMap[char]) {
      sum += primeMap[char];
    }
  }

  return sum % hashSize;
}

const hashSize = 10;
const string = "bag";
console.log(hashMap(string, hashSize));

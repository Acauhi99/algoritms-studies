function maxGifts(N: number, gifts: [number, number][]): number {
  gifts.sort((a, b) => a[0] - b[0]);

  let totalMoneySaved = 0;
  let giftsBought = 0;

  for (let i = 1; i < N; i++) {
    const [day, cost] = gifts[i];
    totalMoneySaved = day;

    if (totalMoneySaved >= cost) {
      giftsBought++;
      totalMoneySaved -= cost;

      for (let j = i + 1; j < N; j++) {
        gifts[j][1] -= cost;
      }
    }
  }

  return giftsBought;
}

console.log(
  maxGifts(3, [
    [3, 2],
    [5, 4],
    [6, 3],
  ])
);

console.log(
  maxGifts(4, [
    [5, 5],
    [6, 2],
    [7, 2],
    [8, 2],
  ])
);

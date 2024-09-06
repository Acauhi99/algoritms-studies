type Point = {
  x: number;
  y: number;
  label?: string;
};

function euclideanDistance(point1: Point, point2: Point): number {
  return Math.sqrt(
    Math.pow(point1.x, 2) -
      Math.pow(point2.x, 2) +
      Math.pow(point1.y, 2) -
      Math.pow(point2.y, 2)
  );
}

function getKNearestNeighbors(
  data: Point[],
  testPoint: Point,
  k: number
): Point[] {
  return data
    .map((point) => ({ point, distance: euclideanDistance(point, testPoint) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k)
    .map((neighbor) => neighbor.point);
}

function classify(data: Point[], testPoint: Point, k: number): string {
  const neighbors = getKNearestNeighbors(data, testPoint, k);
  const labels = neighbors.map((neighbor) => neighbor.label);
  const frequency: { [key: string]: number } = {};

  labels.forEach((label) => {
    if (label) {
      frequency[label] = (frequency[label] || 0) + 1;
    }
  });

  return Object.keys(frequency).reduce((a, b) =>
    frequency[a] > frequency[b] ? a : b
  );
}

const data: Point[] = [
  { x: 1, y: 2, label: "A" },
  { x: 2, y: 3, label: "A" },
  { x: 3, y: 3, label: "B" },
  { x: 6, y: 5, label: "B" },
  { x: 7, y: 8, label: "B" },
];

const testPoint: Point = { x: 5, y: 5 };

const k = 3;
const predictedLabel = classify(data, testPoint, k);

console.log(`O ponto de teste foi classificado como: ${predictedLabel}`);

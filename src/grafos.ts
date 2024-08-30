class GraphNode {
  info: string;
  neighbors: GraphNode[];

  constructor(info: string) {
    this.info = info;
    this.neighbors = [];
  }
}

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function generateRandomGraph(
  depth: number,
  maxNeighbors: number = 2
): GraphNode {
  const root = new GraphNode(generateRandomInfo());
  if (depth > 0) {
    for (let i = 0; i < maxNeighbors; i++) {
      if (Math.random() > 0.5) {
        root.neighbors.push(generateRandomGraph(depth - 1, maxNeighbors));
      }
    }
  }
  return root;
}

function generateRandomInfo(): string {
  return Math.random().toString(36).substring(2, 7);
}

function bfs(root: GraphNode): void {
  const queue = new Queue<GraphNode>();
  const visited = new Set<GraphNode>();

  queue.enqueue(root);
  visited.add(root);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    if (current) {
      console.log(current.info);

      for (const neighbor of current.neighbors) {
        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

const graph = generateRandomGraph(3);
bfs(graph);

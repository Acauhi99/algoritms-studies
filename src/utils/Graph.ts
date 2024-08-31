export class Graph {
  nodes: Map<string, Map<string, number>>;

  constructor() {
    this.nodes = new Map();
  }

  public addNode(node: string) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, new Map());
    }
  }

  public addEdge(start: string, end: string, weight: number) {
    if (!this.nodes.has(start)) {
      this.addNode(start);
    }
    if (!this.nodes.has(end)) {
      this.addNode(end);
    }
    this.nodes.get(start)!.set(end, weight);
  }

  public getNeighbors(node: string): Map<string, number> | undefined {
    return this.nodes.get(node);
  }
}

import { Graph } from "./utils/Graph";

interface DijkstraResult {
  distance: number;
  path: string[];
}

interface DijkstraInitialization {
  distances: Map<string, number>;
  previous: Map<string, string | undefined>;
  nodes: Set<string>;
}

class Dijkstra {
  private graph: Graph;
  private distances: Map<string, number>;
  private previous: Map<string, string | undefined>;
  private nodes: Set<string>;

  constructor(graph: Graph) {
    this.graph = graph;
    this.distances = new Map();
    this.previous = new Map();
    this.nodes = new Set();
  }

  private initialize(start: string): DijkstraInitialization {
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string | undefined> = new Map();
    const nodes: Set<string> = new Set();

    this.graph.nodes.forEach((_, node) => {
      if (node === start) {
        distances.set(node, 0);
      } else {
        distances.set(node, Infinity);
      }
      previous.set(node, undefined);
      nodes.add(node);
    });

    return { distances, previous, nodes };
  }

  private getClosestNode(): string | undefined {
    let closestNode: string | undefined = undefined;

    this.nodes.forEach((node) => {
      if (
        closestNode === undefined ||
        this.distances.get(node)! < this.distances.get(closestNode)!
      ) {
        closestNode = node;
      }
    });

    return closestNode;
  }

  private updateDistancesAndPrevious(closestNode: string) {
    const neighbors = this.graph.getNeighbors(closestNode);

    if (neighbors) {
      neighbors.forEach((weight, neighbor) => {
        const alt = this.distances.get(closestNode)! + weight;
        if (alt < this.distances.get(neighbor)!) {
          this.distances.set(neighbor, alt);
          this.previous.set(neighbor, closestNode);
        }
      });
    }
  }

  public findShortestPath(): DijkstraResult {
    const start = "start";
    const end = "end";
    const { distances, previous, nodes } = this.initialize(start);

    this.distances = distances;
    this.previous = previous;
    this.nodes = nodes;

    while (this.nodes.size > 0) {
      const closestNode = this.getClosestNode();

      if (closestNode === undefined) {
        break;
      }

      this.nodes.delete(closestNode);

      if (closestNode === end) {
        const path: string[] = [];
        let currentNode: string | undefined = end;
        while (currentNode) {
          path.unshift(currentNode);
          currentNode = this.previous.get(currentNode);
        }
        return { distance: this.distances.get(end)!, path };
      }

      this.updateDistancesAndPrevious(closestNode);
    }

    return { distance: Infinity, path: [] };
  }
}

// Criar o grafo conforme a descrição fornecida
const exampleGraph = new Graph();
exampleGraph.addEdge("start", "a", 5);
exampleGraph.addEdge("start", "b", 2);
exampleGraph.addEdge("b", "a", 8);
exampleGraph.addEdge("b", "d", 7);
exampleGraph.addEdge("a", "d", 2);
exampleGraph.addEdge("a", "c", 4);
exampleGraph.addEdge("c", "end", 3);
exampleGraph.addEdge("c", "d", 6);
exampleGraph.addEdge("d", "end", 1);

// Executar o algoritmo de Dijkstra no grafo criado
const dijkstra = new Dijkstra(exampleGraph);
const resultado = dijkstra.findShortestPath();
console.log(`Distância: ${resultado.distance}`);
console.log(`Caminho: ${resultado.path.join(" -> ")}`);

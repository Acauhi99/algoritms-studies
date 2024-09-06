import { Color } from "./utils/Color";
import { Node } from "./utils/Node";

class RedBlackTree {
  root: Node | null = null;

  private rotateLeft(node: Node): void {
    const rightNode = node.right!;
    node.right = rightNode.left;

    if (rightNode.left) {
      rightNode.left.parent = node;
    }

    rightNode.parent = node.parent;

    if (!node.parent) {
      this.root = rightNode;
    } else if (node === node.parent.left) {
      node.parent.left = rightNode;
    } else {
      node.parent.right = rightNode;
    }

    rightNode.left = node;
    node.parent = rightNode;
  }

  private rotateRight(node: Node): void {
    const leftNode = node.left!;
    node.left = leftNode.right;

    if (leftNode.right) {
      leftNode.right.parent = node;
    }

    leftNode.parent = node.parent;

    if (!node.parent) {
      this.root = leftNode;
    } else if (node === node.parent.right) {
      node.parent.right = leftNode;
    } else {
      node.parent.left = leftNode;
    }

    leftNode.right = node;
    node.parent = leftNode;
  }

  private fixInsert(node: Node): void {
    while (node.parent && node.parent.color === Color.RED) {
      if (node.parent.parent) {
        if (node.parent === node.parent.parent.left) {
          this.fixInsertLeft(node);
        } else {
          this.fixInsertRight(node);
        }
      }
    }
    this.root!.color = Color.BLACK;
  }

  private fixInsertLeft(node: Node): void {
    const uncle = node.parent!.parent!.right;
    if (uncle && uncle.color === Color.RED) {
      node.parent!.color = Color.BLACK;
      uncle.color = Color.BLACK;
      node.parent!.parent!.color = Color.RED;
      node = node.parent!.parent!;
    } else {
      if (node === node.parent!.right) {
        node = node.parent!;
        this.rotateLeft(node);
      }
      node.parent!.color = Color.BLACK;
      node.parent!.parent!.color = Color.RED;
      this.rotateRight(node.parent!.parent!);
    }
  }

  private fixInsertRight(node: Node): void {
    const uncle = node.parent!.parent!.left;
    if (uncle && uncle.color === Color.RED) {
      node.parent!.color = Color.BLACK;
      uncle.color = Color.BLACK;
      node.parent!.parent!.color = Color.RED;
      node = node.parent!.parent!;
    } else {
      if (node === node.parent!.left) {
        node = node.parent!;
        this.rotateRight(node);
      }
      node.parent!.color = Color.BLACK;
      node.parent!.parent!.color = Color.RED;
      this.rotateLeft(node.parent!.parent!);
    }
  }

  insert(value: number): void {
    const newNode = new Node(value, Color.RED);
    if (!this.root) {
      this.root = newNode;
      this.root.color = Color.BLACK;
      return;
    }

    let current = this.root;
    let parent: Node | null = null;

    while (current) {
      parent = current;
      if (newNode.value < current.value) {
        current = current.left!;
      } else {
        current = current.right!;
      }
    }

    newNode.parent = parent;
    if (newNode.value < parent!.value) {
      parent!.left = newNode;
    } else {
      parent!.right = newNode;
    }

    this.fixInsert(newNode);
  }

  inOrderTraversal(node: Node | null, result: number[] = []): number[] {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  display(): void {
    if (!this.root) {
      console.log("A árvore está vazia.");
      return;
    }
    const result = this.inOrderTraversal(this.root);
    console.log("Árvore Rubro-Negra em ordem:", result.join(", "));
  }
}

const tree = new RedBlackTree();
const values = [10, 20, 30, 15, 25, 5, 1];

values.forEach((value) => tree.insert(value));

tree.display();

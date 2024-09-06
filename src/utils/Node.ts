import { Color } from "./Color";

export class Node {
  value: number;
  color: Color;
  left: Node | null;
  right: Node | null;
  parent: Node | null;

  constructor(value: number, color: Color, parent: Node | null = null) {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

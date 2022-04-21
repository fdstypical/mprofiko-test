import { Strategy } from "@/models/Strategy";

export interface TableHeaderNode {
  label: string;
  value: string | number;
  childs?: TableHeaderNode[];
}

export interface TableRowNodeChilds {
  childs: TableRowNode;
}

export interface TableRowNode {
  [key: string]: TableRowNodeChilds | string | number;
}

export interface Table {
  headers: TableHeaderNode[];
  rows: TableRowNode[];
  strategies: Strategy[];
}

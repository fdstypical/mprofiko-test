import {
  Table,
  TableHeaderNode,
  TableRowNode,
  TableRowNodeChilds,
} from "@/models/Table";
import { Strategy } from "@/models/Strategy";

export default class XmlParser {
  protected xml: string;
  protected parser: DOMParser;
  protected headers: TableHeaderNode[] = [];
  protected rows: TableRowNode[] = [];
  protected strategies: Strategy[] = [];

  constructor(xml: string) {
    this.xml = xml;
    this.parser = new DOMParser();
  }

  protected xmlToDoc(): Document {
    const doc = this.parser.parseFromString(this.xml, "text/xml");

    if (this.checkParsingError(doc)) {
      throw Error("Parsing error");
    }

    return doc;
  }

  protected checkParsingError(doc: Document): boolean {
    const parserErrorTagsCollection = doc.getElementsByTagName("parsererror");
    return parserErrorTagsCollection.length > 0;
  }

  protected parseHeaders(table: HTMLTableElement): void {
    const headers = table.getElementsByTagName("header");

    for (const header of headers) {
      const label = header.getAttribute("data-title") || "";
      const value = header.getAttribute("id") || "";

      const headerNode: TableHeaderNode = { label, value };

      const childs = header.getElementsByTagName("subheader");

      if (childs.length > 0) {
        for (const subheader of childs) {
          const label = subheader.getAttribute("data-title") || "";
          const value = subheader.getAttribute("id") || "";

          if (headerNode.childs) {
            headerNode.childs.push({ label, value });
          } else {
            headerNode.childs = [{ label, value }];
          }
        }
      }

      this.headers.push(headerNode);
    }
  }

  protected parseRows(table: HTMLTableElement): void {
    const rows = table.getElementsByTagName("columns");

    for (const row of rows) {
      this.rows.push(this.parseRow(row));
    }
  }

  protected parseRow(row: Element): TableRowNode {
    const columns = row.getElementsByTagName("column");
    const rowNode: TableRowNode = {};

    for (const column of columns) {
      const label = column.getAttribute("data-value") || "";
      const value = column.getAttribute("id") || "";

      rowNode[value] = label;

      const childs = column.getElementsByTagName("subcolumn");

      if (childs.length > 0) {
        for (const subcolumn of childs) {
          const label = subcolumn.getAttribute("data-value") || "";
          const subValue = subcolumn.getAttribute("id") || "";

          if ((rowNode[value] as TableRowNodeChilds).childs) {
            (rowNode[value] as TableRowNodeChilds).childs[subValue] = label;
          } else {
            rowNode[value] = { childs: { [subValue]: label } };
          }
        }
      }
    }

    return rowNode;
  }

  protected parseStrategies(root: HTMLElement): void {
    const strategies = root.getElementsByTagName("strategy");

    for (const strategy of strategies) {
      const forField = strategy.getAttribute("id") || "";
      const strategyName = strategy.getAttribute("data-name") || "";

      this.strategies.push({ forField, strategyName });
    }
  }

  public get GetTable(): Table {
    return {
      headers: this.headers,
      rows: this.rows,
      strategies: this.strategies,
    };
  }

  public parse(): void {
    const doc = this.xmlToDoc();

    const root = doc.getElementById("client-tab");
    const table = root?.getElementsByTagName("table")[0];

    if (root && table) {
      this.parseHeaders(table);
      this.parseRows(table);
      this.parseStrategies(root);
    } else {
      throw Error("Error during parsing table headers");
    }
  }
}

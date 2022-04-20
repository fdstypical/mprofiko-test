import { AxiosInstance } from "axios";
import HttpClient from "@/services/api/base/HttpClient";
import XmlController from "@/services/api/controllers/XmlController";

export class Api {
  public xmlController: XmlController;

  constructor(client: AxiosInstance) {
    this.xmlController = new XmlController(client);
  }
}

export default new Api(HttpClient);

import { AxiosInstance } from "axios";
import ApiControllerGet from "@/services/api/base/ApiControllerGet";

export default class XmlController extends ApiControllerGet<string> {
  constructor(client: AxiosInstance) {
    super(client, "/data.xml");
  }
}

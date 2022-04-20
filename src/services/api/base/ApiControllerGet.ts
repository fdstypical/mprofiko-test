import { AxiosInstance, AxiosRequestConfig } from "axios";

export default abstract class ApiControllerGet<R> {
  protected client: AxiosInstance;
  protected path: string;

  constructor(client: AxiosInstance, path: string) {
    this.client = client;
    this.path = path;
  }

  public get(config?: AxiosRequestConfig): Promise<R> {
    return this.client.get<R>(this.path, config).then(({ data }) => data);
  }
}

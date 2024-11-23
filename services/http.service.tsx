import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
class HttpService {
  private static instance: HttpService;
  private static client: AxiosInstance | null = null;
  private baseUrl: string;
  constructor() {
    this.baseUrl = '';
  }
  public static getInstance(): HttpService {
    if (HttpService.instance == null) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }
  public static getClient() {
    return HttpService.client != null ? HttpService.client : this.getInstance().initClient();
  }
  private get http(): AxiosInstance {
    return HttpService.client != null ? HttpService.client : this.initClient();
  }
  private initClient(): AxiosInstance {
    const http = axios.create({
      baseURL: this.baseUrl,
    });
    return http;
  }

  static get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return HttpService.getClient().get<T, R>(url, config);
  }

  static post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<R>
  ): Promise<R> {
    return HttpService.getClient().post<T, R>(url, data, config);
  }

  static put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<R>
  ): Promise<R> {
    return HttpService.getClient().put<T, R>(url, data, config);
  }

  static patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<R>
  ): Promise<R> {
    return HttpService.getClient().patch<T, R>(url, data, config);
  }

  static delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return HttpService.getClient().delete<T, R>(url, config);
  }
}

export default HttpService;

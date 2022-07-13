export enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
  Options = "OPTIONS",
  Patch = "PATCH",
  Head = "HEAD",
}

export interface IHttpClientOptions {
  method?: HttpMethod

  headers?: { [name: string]: string }

  data?: any

  options?: any

  url?: string
}

export interface IHttpResponse<T> {
  status: number

  headers?: { [name: string]: string }

  data?: T
}

export interface IHttpClient {
  exchange<T>(
    url: string,
    options?: IHttpClientOptions
  ): Promise<IHttpResponse<T>>
}

export const DefaultHttpClientOptions: IHttpClientOptions = {
  method: HttpMethod.Get,
}

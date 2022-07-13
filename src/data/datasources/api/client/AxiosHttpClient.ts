import axios, { AxiosInstance } from "axios"
import { HttpMethod, IHttpClientOptions, IHttpResponse } from "./Http.interface"

export class AxiosService {
  service: AxiosInstance

  private static instance: AxiosService

  private constructor() {
    const service = axios.create({
      timeout: 30000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    this.service = service
  }

  handleSuccess(response: any) {
    return response
  }

  handleError = (error: any) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      return {
        data: {
          object: "error",
          type: "timeout",
          message: error.message,
        },
      }
    }
    if (error.response) {
      switch (error.response.status) {
        case 400:
          return {
            data: {
              object: "error",
              type: "card_error",
              message:
                error.response &&
                error.response.data &&
                error.response.data.user_message
                  ? error.response.data.user_message
                  : "No se pudo reconocer la tarjeta de débito o crédito.",
            },
          }
        case 401:
          return {
            data: {
              object: "error",
              type: "authentication_error",
              message:
                error.response &&
                error.response.data &&
                error.response.data.merchant_message
                  ? error.response.data.merchant_message
                  : "API no válida",
            },
          }
        case 405:
          return {
            data: {
              object: "error",
              type: "resource_error",
              message:
                error.response &&
                error.response.data &&
                error.response.merchant_message
                  ? error.response.merchant_message
                  : "API no válida",
            },
          }
        default:
          return {
            data: {
              object: "error",
              type: "error",
              message: "error",
            },
          }
      }
    } else if (error.request) {
      return {
        data: {
          object: "error",
          type: "error",
          message: "error",
        },
      }
    } else {
      return {
        data: {
          object: "error",
          type: "error",
          message: "error",
        },
      }
    }
  }

  public async exchange<T>(
    url: string,
    options: IHttpClientOptions = {},
    callback: any = {}
  ): Promise<IHttpResponse<T>> {
    options.url = url
    options.method = options.method || HttpMethod.Get
    const response = await this.service(options)
    return response.data
  }

  public static getInstance(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService()
    }
    return AxiosService.instance
  }
}

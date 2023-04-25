// (1)
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IResponse } from '../types';

export class ApiClientLayer {
	private apiInstance: AxiosInstance;

	constructor(config?: AxiosRequestConfig<any> | undefined) {
		this.apiInstance = axios.create(config);
	}

	handleSuccess<T>(response: AxiosResponse<any>) {
		return response.data as IResponse<T>;
	}

	handleError(error: Error) {
		return Promise.reject(error);
	}

	async get<TResponse = any>(url: string, config?: AxiosRequestConfig) {
		try {
			const response: AxiosResponse<TResponse> = await this.apiInstance.get(
				url,
				config
			);
			return this.handleSuccess<TResponse>(response);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	async post<TResponse = any, Payload = any>(
		url: string,
		data?: Payload,
		config?: AxiosRequestConfig<Payload>
	) {
		try {
			const response: AxiosResponse<TResponse, Payload> =
				await this.apiInstance.post(url, data, config);
			return this.handleSuccess<TResponse>(response);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	async put<TResponse = any, Payload = any>(
		url: string,
		data?: Payload,
		config?: AxiosRequestConfig<Payload>
	) {
		try {
			const response: AxiosResponse<TResponse, Payload> =
				await this.apiInstance.put(url, data, config);
			return this.handleSuccess<TResponse>(response);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	async patch<TResponse = any, Payload = any>(
		url: string,
		data?: Payload,
		config?: AxiosRequestConfig<Payload>
	) {
		try {
			const response: AxiosResponse<TResponse, Payload> =
				await this.apiInstance.patch(url, data, config);
			return this.handleSuccess<TResponse>(response);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	async delete<TResponse = any, Payload = any>(
		url: string,
		config?: AxiosRequestConfig<Payload>
	) {
		try {
			const response: AxiosResponse<TResponse, Payload> =
				await this.apiInstance.delete(url, config);
			return this.handleSuccess<TResponse>(response);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	addInterceptor() {
		return this.apiInstance.interceptors;
	}
}

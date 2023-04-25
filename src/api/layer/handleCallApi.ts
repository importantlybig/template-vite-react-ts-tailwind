import { IResponse } from '../types';

interface IHandleCallApiBase<R> {
	api: () => Promise<IResponse<R>>;
	onSuccess: (data: R) => void;
	onSoftError: (data: IResponse<R>) => void;
	onHardError: (error: any) => void;
}

export const handleCallApiBase = async <R>(config: IHandleCallApiBase<R>) => {
	try {
		const response = await config.api();

		if (response.status.success) {
			if (response.meta) {
				// use as any, because type response is IResponse<R> not map for type onSuccess R
				return config.onSuccess(response as any);
			}
			return config.onSuccess(response.data);
		}
		return config.onSoftError(response);
	} catch (error: any) {
		return config.onHardError(error);
	}
};

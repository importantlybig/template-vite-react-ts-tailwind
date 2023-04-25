import { api } from './configMainApi';
import { IResponse, IRegisterPayload, ILoginPayload } from './types';

export const authAPI = {
	register: (data: IRegisterPayload) =>
		api.post<IResponse>('/auth/register', data),
	activate: (activeToken: string) =>
		api.post<IResponse>('/auth/active', { activeToken }),
	login: (data: ILoginPayload) => api.post<IResponse>('/auth/login', data),
};

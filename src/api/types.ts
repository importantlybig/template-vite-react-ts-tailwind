export type IResponse<R = any> = {
	data: R;
	status: {
		code: number;
		message: string;
		success: boolean;
	};
	meta?: IMetaResponse;
};

export interface IMetaResponse {
	currentPage: number;
	pageSize: number;
	totalPages: number;
	totalRows: number;
}

export interface ILoginPayload {
	email: string;
	password: string;
}

export interface IRegisterPayload extends ILoginPayload {
	name: string;
}

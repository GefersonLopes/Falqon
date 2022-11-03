export interface IRequestCreateTasks {
    name: string;
    description: string;
    userId?: string;
};

export interface IRequestTasks {
    name: string;
    description: string;
};

export interface IResponseTasks extends IRequestTasks {
    id: string;
};
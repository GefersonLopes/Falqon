export interface IRequestCreateUser {
    name: string;
    email: string;
    password: string;
};

export interface IRequestUser {
    email: string;
    password: string;
};

export interface IResponseUser extends IRequestUser {
    id: string;
};

export interface IToken {
    token: string;
    id: string;
}
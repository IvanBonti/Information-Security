import { HttpHandler } from './http-handler'

const verifyApiHealthCheck = () => HttpHandler.get(`/`);
const getCryptographicSecret = () => HttpHandler.get(`/criptographic-secret`);

const userLogin = (data: UserLoginRequest) => HttpHandler.put(`/login`, data);

class UserLoginRequest {
    name: string|null
    password: string|null

    constructor(name: string|null = null, password: string|null = null) {
        this.name = name;
        this.password = password;
    }
}

export {
    verifyApiHealthCheck,
    getCryptographicSecret,
    userLogin,
    UserLoginRequest
}
import { Roles } from "./role.type";

export interface UserLogged{
    firstname:string,
    lastname:string,
    picture?:string,
    role:Roles,
}
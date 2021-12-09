import { Roles } from "./role.type";

export interface UserLogged{
    username:string,
    firstname:string,
    lastname:string,
    picture?:string,
    role:Roles,
    displayRole:string,
}
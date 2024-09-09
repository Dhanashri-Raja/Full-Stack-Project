import { first } from "rxjs";

export class User {
    id: number = 0;
    firstName: string = '';
    lastName: string = ''
    email: string = '';
    pass: string = '';
    role: string = '';
    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        pass: string,
        role: string,
        ) {
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.role = role;
        this.pass = pass;
    }

}

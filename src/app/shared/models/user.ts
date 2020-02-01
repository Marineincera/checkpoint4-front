export class User {
    id?: number;
    pseudo?: string;
    email?: string;
    userRoleId?: number;
    password?: string;

    constructor(user: User) {
        Object.assign(user, this);
    }

}

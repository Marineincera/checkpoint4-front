export class User {
    id: number;
    pseudo: string;
    email: string;
    userRoleId: number;

    constructor(user: User) {
        Object.assign(user, this);
    }

}

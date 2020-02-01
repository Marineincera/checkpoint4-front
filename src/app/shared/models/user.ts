import { UserRole } from './user-role';

export class User {
    id?: number;
    pseudo?: string;
    email?: string;
    userRole?: number;
    password?: string;

    constructor(user: User) {
        Object.assign(user, this);
    }

}

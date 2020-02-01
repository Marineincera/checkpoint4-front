import { UserRole } from './user-role';

export class User {
    id?: number;
    pseudo?: string;
    email?: string;
    userRole?: UserRole;
    password?: string;
    userRoleId?: number;

    constructor(user: User) {
        Object.assign(user, this);
    }

}

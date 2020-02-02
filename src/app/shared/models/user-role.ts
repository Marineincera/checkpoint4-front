export class UserRole {
    id: number;
    name?: string;

    constructor(userRole: UserRole) {
        Object.assign(userRole, this);
    }
}

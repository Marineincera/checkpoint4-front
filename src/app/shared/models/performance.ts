import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from './user';

export class Performance {
    id?: number;
    name: string;
    picture: string;
    description: string;
    categoryPerformance?: number;
    users?: User[];
    messages?: Message[];

    constructor(performance: Performance) {
        Object.assign(performance, this);
    }
}

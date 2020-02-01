import { Place } from './place';

export class Representation {
    id?: number;
    beginHour?: number;
    place?: number;

    constructor(representation: Representation) {
        Object.assign(representation, this);
    }
}

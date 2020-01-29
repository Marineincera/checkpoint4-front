import { Representation } from './representation';

export class Place {
    id: number;
    city: string;
    begin: number;
    end: number;
    representations: Representation[];

    constructor(place: Place) {
        Object.assign(place, this);
    }
}

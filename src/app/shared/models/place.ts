import { Representation } from './representation';

export class Place {
    id: number;
    city: string;
    begin: string;
    end: string;
    representations: Representation[];

    constructor(place: Place) {
        Object.assign(place, this);
    }
}

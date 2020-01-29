export class Representation {
    id: number;
    begin: number;
    placeId: number;

    constructor(representation: Representation) {
        Object.assign(representation, this);
    }
}

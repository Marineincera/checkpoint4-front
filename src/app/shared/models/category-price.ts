export class CategoryPrice {
    id?: number;
    name?: string;

    constructor(category: CategoryPrice) {
        Object.assign(category, this);
    }
}

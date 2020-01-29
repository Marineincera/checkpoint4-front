export class CategoryPerformance {
    id: number;
    name: string;

    constructor(category: CategoryPerformance) {
        Object.assign(category, this);
    }

}

export class CategoryPerformance {
    id: number;
    name: string;
    performances?: Performance[];

    constructor(category: CategoryPerformance) {
        Object.assign(category, this);
    }

}

export class Message {
    id: number;
    userId?: number;
    performancesId?: number;
    text: string;
    object: string;

    constructor(message: Message) {
        Object.assign(message, this);
    }
}

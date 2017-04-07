export default class News {
    id: number;
    title: string;
    description: string;
    text: string;
    isApproved: boolean = false;
    createdAt: Date;
    createdBy: string;
    startDate: Date;
    endDate: Date;
    lastEdit: Date;


    constructor(title: string, description: string, text: string) {
        this.description = description;
        this.title = title;
        this.text = text;
    }
}
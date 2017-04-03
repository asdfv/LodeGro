export default class News {
    id: number;
    title: string;
    description: string;
    text: string;
    isApproved: boolean = false;


    constructor(title: string, description: string, text: string) {
        this.description = description;
        this.title = title;
        this.text = text;
    }
}
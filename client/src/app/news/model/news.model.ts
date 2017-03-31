export default class News {
    id: number;
    title: string;
    text: string;
    isApproved: boolean = false;


    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
}
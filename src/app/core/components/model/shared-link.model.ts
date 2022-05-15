export class SharedLinks{
    url:string = '';
    name:string = '';
    title: string = '';
    imgSource: string = '';

    constructor(init?: Partial<SharedLinks>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
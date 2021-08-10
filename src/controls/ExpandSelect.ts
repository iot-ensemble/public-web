
// import { SJSElement } from '@semanticjs/common';

export class ExpandSelect { //extends SJSElement {
    //  Fields
    protected mountedEl?: HTMLElement;

    //  Properties
    public Expanded?: boolean;

    public Options?: Array<HTMLElement>;

    public OptionSelector?: string;

    //  Constructors
    constructor() {
        // super();

        this.Options = [];

        this.OptionSelector = '.option';
    }

    //  API Methods
    public Mount(selector: string | HTMLElement): void {
        if (typeof selector === 'string') {
            selector = <HTMLElement>document.querySelector(<string>selector);
        }

        this.mountedEl = this.mountToElement(<HTMLElement>selector);
    }

    //  Helpers
    protected mountToElement(el: HTMLElement): HTMLElement {
        const optionElements = el.querySelectorAll(<string>this.OptionSelector);
        
        optionElements.forEach(oe => oe.classList.add('testing'));

        return el;
    }
}

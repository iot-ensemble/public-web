function SJSElement<T extends { new (...args: any[]): any }>(constructor: T) {
    return class extends constructor {
        //  Fields
        protected mountedEl?: HTMLElement;

        //  API Methods
        public Mount(selector: string | HTMLElement): void {
            if (typeof selector === "string") {
                selector = <HTMLElement>(
                    document.querySelector(<string>selector)
                );
            }

            this.mountedEl = this.mountToElement(<HTMLElement>selector);
        }

        //  Helpers
        protected mountToElement(el: HTMLElement): HTMLElement {
            if (super.mountToElement) {
                return super.mountToElement(el);
            } else {
                return el;
            }
        }
    };
}

@SJSElement
export class ExpandSelect {
    //  Fields

    //  Properties
    public Expanded?: boolean;

    //  Constructors
    constructor() {}

    //  API Methods
    public Alert(msg: string): void {
        alert(msg);
    }

    //  Helpers
    protected mountToElement(el: HTMLElement): HTMLElement {

        return el;
    }
}

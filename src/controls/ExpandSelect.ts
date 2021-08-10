// import { SJSElement } from '@semanticjs/common';

export class ExpandSelect {
    //extends SJSElement {
    //  Fields
    protected mountedEl?: HTMLElement;

    //  Properties
    public Expanded?: boolean;

    public Options: Array<HTMLElement>;

    public OptionSelector?: string;

    public SelectedIndex: number;

    //  Constructors
    constructor() {
        // super();

        this.Options = [];

        this.OptionSelector = '.option';

        this.SelectedIndex = 0;
    }

    //  Life Cycle
    public Mount(selector: string | HTMLElement): void {
        if (typeof selector === 'string') {
            selector = <HTMLElement>document.querySelector(<string>selector);
        }

        this.mountedEl = this.mountToElement(<HTMLElement>selector);
    }

    //  API Methods
    public SetSelectedIndex(index: number | HTMLElement): void {
        if (index instanceof HTMLElement) {
            index = this.Options.indexOf(index);
            debugger;
        }

        this.SelectedIndex = index;
        debugger;

        this.setupActiveElement();
    }

    //  Helpers
    protected mountToElement(el: HTMLElement): HTMLElement {
        this.setupOptions(el);

        this.setupActiveElement(el);

        this.setupActiveElement(el);

        return el;
    }

    protected removeAllChildren(el?: HTMLElement): void {
        const workingEl = el || this.mountedEl;

        workingEl?.childNodes?.forEach((cn) => {
            workingEl?.removeChild(cn);
        });
    }

    protected setupOptions(el?: HTMLElement): void {
        const workingEl = el || this.mountedEl;

        const optionElements = workingEl?.querySelectorAll(
            <string>this.OptionSelector
        );

        optionElements?.forEach((oe) => {
            oe?.addEventListener('click', (ev) => {
                this.SetSelectedIndex(<HTMLElement>ev.currentTarget);
            });

            this.Options.push(<HTMLElement>oe);

            workingEl?.removeChild(oe);
        });
    }

    protected setupActiveElement(el?: HTMLElement): void {
        const workingEl = el || this.mountedEl;

        this.removeAllChildren(workingEl);

        workingEl?.appendChild(this.Options[this.SelectedIndex]);
    }
}

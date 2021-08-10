// import { SJSElement } from '@semanticjs/common';

export class ExpandSelect {
    //extends SJSElement {
    //  Fields
    protected mountedEl?: HTMLElement;

    //  Properties
    public ClosedClass: string;

    public IsOpen: boolean;

    public OpenClass: string;

    public Options: Array<HTMLElement>;

    public OptionSelector?: string;

    public SelectedClass: string;

    public SelectedIndex: number;

    //  Constructors
    constructor() {
        // super();

        this.ClosedClass = 'closed';

        this.IsOpen = false;

        this.OpenClass = 'open';

        this.Options = [];

        this.OptionSelector = '.option';

        this.SelectedClass = 'selected';

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
        }

        this.SelectedIndex = index;

        this.setupActiveElements();
    }

    //  Helpers
    protected mountToElement(el: HTMLElement): HTMLElement {
        this.setupOptions(el);

        this.setupActiveElements(el);

        el.classList.add('sjs-expand-select');

        return el;
    }

    protected removeAllChildren(el?: HTMLElement): void {
        const workingEl = el || this.mountedEl;

        Array.from(<HTMLCollection>workingEl?.children).forEach((child) => {
            child.classList.remove(this.SelectedClass);
            
            workingEl?.removeChild(child);
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

    protected setupActiveElements(el?: HTMLElement): void {
        const workingEl = el || this.mountedEl;

        const containsActive = workingEl?.children.length === 1;

        this.removeAllChildren(workingEl);

        if (containsActive) {
            this.IsOpen = true;
            
            this.Options.forEach(option => {
                workingEl?.appendChild(option);
            });
        } else {
            this.IsOpen = false;

            this.Options[this.SelectedIndex].classList.add(this.SelectedClass);

            workingEl?.appendChild(this.Options[this.SelectedIndex]);
        }

        workingEl?.classList.remove(!this.IsOpen ? this.OpenClass : this.ClosedClass);

        workingEl?.classList.add(this.IsOpen ? this.OpenClass : this.ClosedClass);
    }
}

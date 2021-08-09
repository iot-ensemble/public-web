
import { SJSElement } from '@semanticjs/common';

export class ExpandSelect extends SJSElement {
    //  Fields

    //  Properties
    public Expanded?: boolean;

    //  Constructors
    constructor() {
        super();
    }

    //  API Methods

    //  Helpers
    protected mountToElement(el: HTMLElement): HTMLElement {
        return el;
    }
}

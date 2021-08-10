
import { SJSElement } from '@semanticjs/common';

export class Options {
    public Id: string = '';
    public Img: string = '';
}

export class ExpandSelect extends SJSElement {
    //  Fields

    //  Properties
    public Expanded?: boolean;

    // public HardwareList?: Array<Options> ;
    // public SoftwareList?: Array<Options>;

    //  Constructors
    constructor() {
        super();

        // this.HardwareList = [
        //     { 
        //         Id: 'PhoenixContact', 
        //         Img: 'https://www.phoenixcontact.com/theme/img/logo.gif' }
        // ]

        // this.SoftwareList = [
        //     {
        //         Id: 'Grafana', 
        //         Img: './static/images/third-party/logos/Grafana.png'}
        // ]

        this.setupHardwareList();
    }

    //  API Methods

    //  Helpers
    protected mountToElement(el: HTMLElement): HTMLElement {
        
        return el;
    }

    protected setupHardwareList(): void {
        // debugger;
        // const el: any = document.getElementById('hardware');
        // // const div: HTMLElement = document.createElement('div');
        // if (this.HardwareList) {
        //     for (let hardware of this.HardwareList) {
               
        //         const option: HTMLElement = document.createElement('div'); const div: HTMLElement = document.createElement('div');
        //         const img: any = document.createElement('img');

        //         option.classList.add('option');
        //         img.src = hardware.Img;
        //         option.appendChild(img);
        //         option.appendChild(img);
        //         el.appendChild(option);
        //     }
        // }
    }
}

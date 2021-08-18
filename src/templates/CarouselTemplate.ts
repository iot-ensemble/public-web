export class TemplateModel {
    public ClassList: Array<string>;
    public Id: string;
    public Img: string;

    constructor(opts: TemplateModel) {

        this.ClassList = [];
        this.Id = '';
        this.Img = '';

        Object.assign(this, opts); // destructure values
    }
}

export class CarouselTemplate {

    public ClassList: Array<string>;
    public Templates: Array<TemplateModel>;

    constructor(classList: Array<string>, templates: Array<TemplateModel>) {

        this.ClassList = classList;
        this.Templates = templates;
    }

    /**
     * Create template for the carousel
     * 
     * @param el parent HTMLElement to attach options to
     * @param list array of items to be attached
     */
    public Render(el: HTMLElement): void {
        for (let item of this.Templates) {
            const option: HTMLElement = document.createElement('div'); 
            const div: HTMLElement = document.createElement('div');
            const img: any = document.createElement('img');
           
            option.classList.add(...item.ClassList);
            img.src = item.Img;
            option.appendChild(img);

            el.appendChild(option);
        }
    }

    public HTMLString(): any {
        
    }
}
export class Carousel {
    //  Fields
    /**
     * Disables interactivity - 'true' disables
     */
    protected isMoving: boolean;

    /**
     * List of carousel items
     */
    protected items: Array<Element>;

    /**
     * The mounted element for internal DOM manipulations.
     */
    protected mountedEl?: HTMLElement;

    /**
     * The next button
     */
    protected nextBtn?: HTMLElement;

    /**
     * The previous button
     */
    protected prevBtn?: HTMLElement;

    //  Properties

    /**
     * Carousel item class
     */
    protected ItemClassName: string;

    /**
     * Carousel item class
     */
    protected NextButtonClassName: string;

    /**
     * Carousel item class
     */
    protected PrevButtonClassName: string;

    /**
     * The value of the next slide.
     */
    public get NextSlide(): number {
        if (this.Slide >= this.TotalItems - 1) {
            return 0;
        } else {
            return this.Slide + 1;
        }
    }

    /**
     * The value of the previous slide.
     */
    public get PreviousSlide(): number {
        if (this.Slide <= 0) {
            return this.TotalItems - 1;
        } else {
            return this.Slide - 1;
        }
    }

    /**
     * Value that tells us what frame we're on
     */
    public Slide: number;

    /**
     * Total carousel items
     */
    public get TotalItems(): number {
        return this.items?.length || 0;
    }

    //  Constructors
    constructor() {
        this.isMoving = true;

        this.items = [];

        this.ItemClassName = 'sjs-carousel-item';

        this.NextButtonClassName = 'sjs-carousel-button-next';

        this.PrevButtonClassName = 'sjs-carousel-button-prev';

        this.Slide = 0;
    }

    //  API Methods
    public Mount(selector: string | HTMLElement): void {
        if (typeof selector === 'string') {
            selector = <HTMLElement>document.querySelector(<string>selector);
        }

        this.mountedEl = this.mountToElement(<HTMLElement>selector);
    }

    public SetSlide(slide: number | HTMLElement): void {
        if (slide instanceof HTMLElement) {
            slide = <number>this.items?.indexOf(slide);
        }

        if (!this.isMoving) {
            this.removeClasses();

            this.Slide = slide;

            this.setClasses();
        }
    }

    //  Helpers
    /**
     * Disable isMoving for the same duration as our transition (500ms)
     */
    protected disableInteraction(): void {
        this.isMoving = true;

        setTimeout(() => {
            this.isMoving = false;
        }, 500);
    }

    protected mountToElement(el: HTMLElement): HTMLElement {
        this.setupChildElements(el);

        this.setClasses();

        this.setupEventListeners();

        this.isMoving = false;

        el.classList.add('sjs-carousel');

        return el;
    }

    /**
     * Next navigation
     */
    protected moveNext(): void {
        this.SetSlide(this.NextSlide);
    }

    /**
     * Previous navigation
     */
    protected movePrev(): void {
        this.SetSlide(this.NextSlide);
    }

    /**
     * Remove carousel classes
     */
    protected removeClasses(): void {
        this.items[this.PreviousSlide].classList.remove('prev');

        this.items[this.Slide].classList.remove('active');

        this.items[this.NextSlide].classList.remove('next');
    }

    /**
     * Set carousel classes
     */
    protected setClasses(): void {
        this.items[this.PreviousSlide].classList.add('prev');

        this.items[this.Slide].classList.add('active');

        this.items[this.NextSlide].classList.add('next');
    }

    /**
     * Click events for navigation buttons
     */
    protected setupEventListeners(): void {
        this.nextBtn?.addEventListener('click', this.moveNext.bind(this));

        this.prevBtn?.addEventListener('click', this.movePrev.bind(this));
    }

    /**
     * Setup child elements
     */
    protected setupChildElements(el?: HTMLElement): void {
        const workingEl = <HTMLElement>el || this.mountedEl;

        this.items = Array.from(workingEl.querySelectorAll(`.${this.ItemClassName}`));

        this.nextBtn = <HTMLElement>(
            workingEl.querySelector(`.${this.NextButtonClassName}`)
        );

        this.prevBtn = <HTMLElement>(
            workingEl.querySelector(`.${this.PrevButtonClassName}`)
        );
    }

    // /**
    //  * Move carousel item
    //  *
    //  * @param slide position to move to
    //  */
    // protected moveCarouselTo(): void {
    //     /**
    //      * If carousel isn't isMoving, then allow interaction
    //      */
    //     if (!this.isMoving) {
    //         /**
    //          * Disable temporarily
    //          */
    //         this.disableInteraction();

    //         /**
    //          * Setting up initial values
    //          */
    //         let newPrevious: number = this.Slide - 1;
    //         let newNext = this.Slide + 1;
    //         let oldPrevious: number = this.Slide - 2;
    //         let oldNext: number = this.Slide + 2;

    //         /**
    //          * Check if there's more than three items,
    //          * otherwise skip these checks
    //          */
    //         if (this.TotalItems - 1 > 3) {
    //             if (newPrevious <= 0) {
    //                 oldPrevious = this.TotalItems - 1;
    //             } else if (newNext >= this.TotalItems - 1) {
    //                 oldNext = 0;
    //             }
    //         }

    //         /**
    //          * Check if the current slide is at the beginning
    //          * or the end
    //          */
    //         if (this.Slide === 0) {
    //             newPrevious = this.TotalItems - 1;
    //             oldPrevious = this.TotalItems - 2;
    //             oldNext = this.Slide + 1;
    //         } else if (this.Slide === this.TotalItems - 1) {
    //             newPrevious = this.Slide - 1;
    //             newNext = 0;
    //             oldNext = 1;
    //         }

    //         /**
    //          * Trigger carousel's transitions
    //          */

    //         /**
    //          * Reset default classes
    //          */
    //         // this.items[oldPrevious].className = this.itemClassName;
    //         // this.items[oldNext].className = this.itemClassName;

    //         /**
    //          * Add new classes
    //          */
    //         this.items[newPrevious].className = this.itemClassName + ' prev';
    //         this.items[this.Slide].className = this.itemClassName + ' active';
    //         this.items[newNext].className = this.itemClassName + ' next';
    //     }
    // }
}

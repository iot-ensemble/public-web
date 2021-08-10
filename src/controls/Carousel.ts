export class Carousel {
  
  //  Fields
  protected mountedEl?: HTMLElement;

  //  Properties

  /**
   * Carousel item class
   */
  protected itemClassName: string;

  /**
   * List of carousel items
   */
  protected items: HTMLCollectionOf<Element>;

  public Options: Array<HTMLElement>;

  public OptionSelector?: string;
  
  /**
   * Disables interactivity - 'true' disables
   */
  protected isMoving: boolean;

  public SelectedIndex: number;

  /**
   * Value that tells us what frame we're on
   */
  protected slide: number;

  /**
   * Total carousel items
   */
  protected totalItems: number;

  //  Constructors
  constructor() {
  
    this.itemClassName = 'carousel-image';

    this.items = document.getElementsByClassName(this.itemClassName);

    this.Options = [];

    this.OptionSelector = '.option';

    this.isMoving = true;

    this.SelectedIndex = 0;

    this.slide = 0;

    this.totalItems = this.items.length;
  }

  //  API Methods

  /**
   * Initialize
   */
   public InitCarousel(): void {
    this.setInitialClasses();
    this.setEventListeners();

    this.isMoving = false;
  }

  public Mount(selector: string | HTMLElement): void {
    if (typeof selector === 'string') {
        selector = <HTMLElement>document.querySelector(<string>selector);
    }

    this.mountedEl = this.mountToElement(<HTMLElement>selector);
  }

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
    // const workingEl = el || this.mountedEl;

    // const containsActive = workingEl?.children.length === 1;

    // this.removeAllChildren(workingEl);

    // if (containsActive) {
    //     this.IsOpen = true;
        
    //     this.Options.forEach(option => {
    //         workingEl?.appendChild(option);
    //     });
    // } else {
    //     this.IsOpen = false;

    //     this.Options[this.SelectedIndex].classList.add(this.SelectedClass);

    //     workingEl?.appendChild(this.Options[this.SelectedIndex]);
    // }

    // workingEl?.classList.remove(!this.IsOpen ? this.OpenClass : this.ClosedClass);

    // workingEl?.classList.add(this.IsOpen ? this.OpenClass : this.ClosedClass);
  }

  /**
   * Initialize carousel classes
   */
  protected setInitialClasses(): void {
    this.items[this.totalItems - 1].classList.add('prev');
    this.items[0].classList.add('active');
    this.items[1].classList.add('next');
  }

  /**
   * Click events for navigation buttons
   */
  protected setEventListeners(): void {

    const next: Element = document.getElementsByClassName('carousel-button-next')[0];
    const prev: Element = document.getElementsByClassName('carousel-button-prev')[0];

    next.addEventListener('click', this.moveNext.bind(this));
    prev.addEventListener('click', this.movePrev.bind);
  }

  /**
   * Next navigation 
   */
  protected moveNext(): void {

    if (!this.isMoving) {

      /**
       * If last item, reset to 0, else move forward one position
       */
      if (this.slide === (this.totalItems - 1)) {
        this.slide = 0;
      } else {
        this.slide++;
      }

      /**
       * Move carousel item
       */
      this.moveCarouselTo(this.slide);
    }
  }

  /**
   * Previous navigation
   */
  protected movePrev(): void {

    if (!this.isMoving) {

      if (this.slide === 0) {
        this.slide = (this.totalItems - 1);
      } else {
        this.slide--;
      }
    }

  /**
   * Move carousel item
   */
    this.moveCarouselTo(this.slide);
  }

  /**
   * Move carousel item
   * 
   * @param slide position to move to
   */
  protected moveCarouselTo(slide: number): void {

    /**
     * If carousel isn't isMoving, then allow interaction
     */
    if (!this.isMoving) {

      /**
       * Disable temporarily
       */
      this.disableInteraction();

      /**
       * Setting up initial values
       */
      let newPrevious: number = this.slide - 1;
      let newNext = this.slide + 1;
      let oldPrevious: number = this.slide - 2;
      let oldNext: number = this.slide + 2;

      /**
       * Check if there's more than three items,
       * otherwise skip these checks
       */
      if ((this.totalItems - 1) > 3) {

        if (newPrevious <= 0) {

          oldPrevious = (this.totalItems - 1);
        } else if (newNext >= (this.totalItems - 1)) {
          oldNext = 0;
        }
      }

      /**
       * Check if the current slide is at the beginning
       * or the end
       */
      if (this.slide === 0) {

        newPrevious = (this.totalItems - 1);
        oldPrevious = (this.totalItems - 2);
        oldNext = (this.slide + 1);

      } else if (this.slide === (this.totalItems - 1)) {

        newPrevious = (this.slide - 1);
        newNext = 0;
        oldNext = 1;
      }

      /**
       * Trigger carousel's transitions
       */

      /**
       * Reset default classes
       */
      this.items[oldPrevious].className = this.itemClassName;
      this.items[oldNext].className = this.itemClassName;

      /**
       * Add new classes
       */
       this.items[newPrevious].className = this.itemClassName + ' prev';
       this.items[slide].className = this.itemClassName + ' active';
       this.items[newNext].className = this.itemClassName + ' next';
    }
  }

  /**
   * Disable isMoving for the same duration as our transition (500ms)
   */
  protected disableInteraction(): void {
    this.isMoving = true;

    setTimeout(() => {
      this.isMoving = false;
    }, 500);
  }
}
    
export class ComponentTest {

    constructor() { }

    /**
     * 
     * @param relativeUrl relative URL to template - (./template.html)
     * @param baseUrl base URL to this file
     * @returns Promise that returns .html file
     */
    protected async loadHTML(relativeUrl: string, baseUrl: string): Promise<string | void> {

        const htmlUrl = new URL(relativeUrl, baseUrl).href;

        return fetch(htmlUrl)
        .then(response => response.text());
    }

    /**
     * 
     * @param htmlRelativeUrl relative URL to template - (./template.html)
     * @returns HTML as a string
     */
    public HTMLToString(relativeUrl: string): string {
        return JSON.stringify(fetch(relativeUrl));
    }

    /**
     * Return HTML from URL
     * 
     * @returns Promise that returns local .html file
     */
    public async ComponentTemplateFromURL(): Promise<string | void> {

         return await this.loadHTML('./template.html', import.meta.url);
     }

     /**
      * 
      * @returns HTML as string
      */
    public ComponentAsString(): string {

        return this.htmlString;
    }

    /**
     * Test HTML string to return
     */
    protected get htmlString(): string {
        return `
            <div class="option sjs-carousel-item">
            <img
                src="./static/images/third-party/logos/Phoenixcontact.png"
            />
            </div>

            <div class="option sjs-carousel-item">
                <img
                    src="./static/images/third-party/logos/Advantech.png"
                />
            </div>

            <div class="option sjs-carousel-item">
                <img
                    src="./static/images/third-party/logos/MicroeLong.png"
                />
            </div>

            <div class="option sjs-carousel-item">
                <img
                    src="./static/images/third-party/logos/Inductiveautomation.png"
                />
            </div>

            <div class="option sjs-carousel-item">
                <img
                    src="./static/images/third-party/logos/Raspberry-Pi.png"
                />
            </div>
        `;
    }
}

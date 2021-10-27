export class Recipes {

    public Recipes: {[key: string]: string} = {
        "Advantech-Grafana":"https://www.iot-ensemble.com/blog/blogs/2021/august/2021-08-08-advantech-grafana-dashboard",
        "Advantech-Powerbi":"https://www.iot-ensemble.com/blog/blogs/2021/august/2021-08-08-advantech-powerbi-dashboard",
        "Advantech-Tableau":"https://www.iot-ensemble.com/blog/blogs/2021/august/2021-08-07-advantech-tableau-dashboard",
        "Advantech-Azure-ML":"https://www.iot-ensemble.com/blog/blogs/2021/august/2021-08-03-advantech-azure-machine-learning",
        "Advantech-Email-Text-Alerts":"https://www.iot-ensemble.com/blog/blogs/2021/august/2021-08-03-advantech-email-text-alerts",
        "Mikroe-Grafana":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-03-mikroe-grafana-dashboard",
        "Mikroe-Powerbi":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-03-mikroe-powerbi-reports",
        "Mikroe-Tableau":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-03-mikroe-tableau-dashboard",
        "Mikroe-Azure-ML":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-03-mikroe-azure-machine-learning",
        "Mikroe-Email-Text-Alerts":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-03-mikroe-email-text-alerts",
        "Phoenix contact-Grafana":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-16-plcnext-grafana-dashboard",
        "Phoenix contact-Powerbi":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-16-plcnext-powerbi-reports",
        "Phoenix contact-Tableau":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-29-plcnext-tableau-dashboard",
        "Phoenix contact-Azure-ML":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-18-plcnext-azure-machine-learning",
        "Phoenix contact-Email-Text-Alerts":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-16-plcnext-email-text-alerts",
        "Adafruit-Grafana":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-17-adafruit-grafana-dashboard",
        "Adafruit-Powerbi":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-17-adafruit-powerbi-dashboard",
        "Adafruit-Tableau":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-17-adafruit-tableau-dashboard",
        "Adafruit-Azure-ML":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-17-adafruit-azure-machine-learning",
        "Adafruit-Email-Text-Alerts":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-17-adafruit-email-text-alerts",
        "Automation Direct-Grafana":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-13-automationdirect-grafana-dashboard",
        "Automation Direct-Powerbi":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-12-automationdirect-powerbi-reports",
        "Automation Direct-Tableau":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-12-automationdirect-tableau-dashboard",
        "Automation Direct-Azure-ML":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-13-automationdirect-azure-machine-learning",
        "Automation Direct-Email-Text-Alerts":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-13-automationdirect-email-text-alerts",
        "MultiTech-Grafana":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-26-multitech-grafana-dashboard",
        "MultiTech-Powerbi":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-26-multitech-powerbi-reports",
        "MultiTech-Tableau":"https://www.iot-ensemble.com/blog/blogs/2021/july/2021-07-01-multitech-tableau-dashboard",
        "MultiTech-Azure-ML":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-26-multitech-azure-machine-learning",
        "MultiTech-Email-Text-Alerts":"https://www.iot-ensemble.com/blog/blogs/2021/june/2021-06-26-multitech-email-text-alerts",
    }

    constructor() {}

    public GetURL(recipe:string){
        if(this.Recipes[recipe]){
            return this.Recipes[recipe];
        }
        else{
            return null;
        }
    }



}
export class Options {
    public Id: string = '';
    public Img: string = '';
}

export class TesterTest {

    public HardwareList?: Array<Options> ;
    public SoftwareList?: Array<Options>;

    constructor(protected value: string) {
  
    }

    public SetupHardwareList(el: HTMLElement): void {
       // const hard: HTMLElement = document.getElementById('hardware');
      
        if (this.HardwareList) {
            
        }
    }

    public SoftHardwareList(el: HTMLElement, list: Array<Options>): void {
    
        // const el: HTMLElement = document.getElementById('hardware');

        for (let item of list) {
            const option: HTMLElement = document.createElement('div'); 
            const div: HTMLElement = document.createElement('div');
            const img: any = document.createElement('img');

            option.classList.add('option');
            img.src = item.Img;
            option.appendChild(img);

            img.addEventListener('click', () => {
                console.log(item.Id + ' Clicked');
            })

            el.appendChild(option);
        }
    }
}




// const HardwareList = [
//     { 
//         Id: 'PhoenixContact 0', 
//         Img: 'https://www.phoenixcontact.com/theme/img/logo.gif' 
//     },
//     { 
//         Id: 'PhoenixContact 1', 
//         Img: 'https://www.phoenixcontact.com/theme/img/logo.gif' 
//     },
//     { 
//         Id: 'PhoenixContact 2', 
//         Img: 'https://www.phoenixcontact.com/theme/img/logo.gif' 
//     },
//     { 
//         Id: 'PhoenixContact 3', 
//         Img: 'https://www.phoenixcontact.com/theme/img/logo.gif' 
//     },
//     { 
//         Id: 'PhoenixContact 4', 
//         Img: 'https://www.phoenixcontact.com/theme/img/logo.gif' 
//     }
// ]

// const SoftwareList = [

//     {
//         Id: 'Grafana 0', 
//         Img: './static/images/third-party/logos/Grafana.png'
//     },
//     {
//         Id: 'Grafana 1', 
//         Img: './static/images/third-party/logos/Grafana.png'
//     },
//     {
//         Id: 'Grafana 2', 
//         Img: './static/images/third-party/logos/Grafana.png'
//     },
//     {
//         Id: 'Grafana 3', 
//         Img: './static/images/third-party/logos/Grafana.png'
//     },
//     {
//         Id: 'Grafana 4', 
//         Img: './static/images/third-party/logos/Grafana.png'
//     }
// ]

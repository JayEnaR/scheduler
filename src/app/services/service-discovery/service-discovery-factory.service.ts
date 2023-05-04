import { Injectable } from '@angular/core';
import { IEndpointModel, IServiceDiscoveryFactory } from "@stt/base";
import { assetUrl } from 'src/single-spa/asset-url';

@Injectable({
  providedIn: 'root'
})
export class ServiceDiscoveryFactoryService implements IServiceDiscoveryFactory {

  public consulUrl?: string;

  constructor() {
    const configurationFile = assetUrl('/config/config.json');
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", configurationFile, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          this.consulUrl = JSON.parse(rawFile.responseText).ConsulUrl;
          console.log(this.consulUrl);
        }
      }
      console.log(rawFile.responseText)
    };
    rawFile.send(null);
  }

  GetConsulService(): string {
    if (this.consulUrl != null)
      return this.consulUrl;
    return "";
  }

  loginRoute: string = "/login";

  authEndpoint: IEndpointModel = {
    applicationName: "EC-Authentication",
    serviceName: "EC-Authentication"
  };

}

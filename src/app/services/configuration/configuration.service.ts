import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoCachePipe } from 'src/app/pipes/NoCachePipe';
import { IConfiguration } from './IConfigurations';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private static readonly URL_CONFIGURATIONS_JSON: string = 'assets/config/config.json';

  public configurationVO: IConfiguration;

  private onComplete: (success: boolean) => void;

  constructor(private http: HttpClient, private noCache: NoCachePipe) { }

  public requestConfigurations(onComplete: (success: boolean) => void): void {
    const url: string = ConfigurationService.URL_CONFIGURATIONS_JSON;
    this.onComplete = onComplete;
    this.http.get<IConfiguration>(this.noCache.transform(url)).subscribe(
      (data: IConfiguration) => this.onDataLoadingSucces(data),
      (error: any) => this.onDataLoadingError(error));
  }

  private onDataLoadingSucces(data: IConfiguration): void {
    this.configurationVO = data;
    this.onComplete(true);
  }

  private onDataLoadingError(error: any): void {
    console.error('Configurations loading failed!');
    this.onComplete(false);
  }
}

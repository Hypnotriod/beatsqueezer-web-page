import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfiguration } from './IConfigurations';
import { LocalizationService } from '../localization/localization.service';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private static readonly URL_CONFIGURATIONS_JSON: string = 'assets/config/config.json?'
    + new Md5().appendStr(Math.random().toString()).end();

  public configurationVO: IConfiguration;

  private onComplete: (success: boolean) => void;

  constructor(private http: HttpClient, private localization: LocalizationService) { }

  public requestConfigurations(onComplete: (success: boolean) => void): void {
    this.onComplete = onComplete;
    this.http.get<IConfiguration>(ConfigurationService.URL_CONFIGURATIONS_JSON).subscribe(
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoCachePipe } from 'src/app/pipes/NoCachePipe';
import { Replacements } from './Replacements';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private static readonly REGEXP_LOCALIZATION_ID_FULL: RegExp = /@@[a-zA-Z_0-9]+:/g;
  private static readonly REGEXP_LOCALIZATION_ID: RegExp = /[a-zA-Z_0-9]+/;
  private static readonly URL_LOCALIZATION: string = 'assets/localization/%LANGUAGE_ID%/localization.txt';

  public userLanguage: string = navigator.language.substring(0, 2);

  private localizationsMap: Map<string, string> = new Map<string, string>();
  private onComplete: (success: boolean) => void;

  constructor(private http: HttpClient, private noCache: NoCachePipe) { }

  public getText(localizationId: string) {
    return this.localizationsMap.get(localizationId) || '';
  }

  public requestLocalizations(languageId: string, onComplete: (success: boolean) => void): void {
    this.onComplete = onComplete;
    const url: string = LocalizationService.URL_LOCALIZATION.replace(Replacements.LANGUAGE_ID, languageId);
    this.http.get(this.noCache.transform(url), { responseType: 'text' }).subscribe(
      (data: string) => this.onDataLoadingSucces(data),
      (error: any) => this.onDataLoadingError(error));
  }

  private onDataLoadingSucces(data: string): void {
    this.parselocalizations(data);
    this.onComplete(true);
    this.onComplete = null;
  }

  private parselocalizations(data: string) {
    const matches: Array<string> = [];
    let match: Array<string>;
    while (match = LocalizationService.REGEXP_LOCALIZATION_ID_FULL.exec(data)) {
      matches.push(match[0]);
    }
    for (let i: number = 0; i < matches.length; i++) {
      const indexStart: number = data.indexOf(matches[i]) + matches[i].length;
      const indexEnd: number = (i < matches.length - 1) ? data.indexOf(matches[i + 1]) : data.length;
      const localizationId: string = LocalizationService.REGEXP_LOCALIZATION_ID.exec(matches[i])[0];
      const localization: string = data.substring(indexStart, indexEnd);
      this.localizationsMap.set(localizationId, localization);
    }
  }

  private onDataLoadingError(error: any): void {
    console.error('Localization loading failed! ' + error);
    this.onComplete(false);
    this.onComplete = null;
  }
}

import { Injectable } from '@angular/core';
import { LocalizationService } from '../localization/localization.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { ILocaleVO, ISvgIconVO } from '../configuration/IConfigurations';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InitializationService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private configurationService: ConfigurationService,
    private localization: LocalizationService) { }

  public init(): Promise<(resolve, reject) => void> {
    return new Promise((resolve, reject) => {
      this.configurationService.requestConfigurations((configurationsLoadSuccess: boolean) => {
        if (configurationsLoadSuccess) {
          this.registerSvgIcons(this.configurationService.configurationVO.svgIcons);
          const locale: ILocaleVO = this.configurationService.configurationVO.locale;
          const language: string =
            locale.supportedLanguages.indexOf(this.localization.userLanguage) !== -1 ?
              this.localization.userLanguage : locale.defaultLanguage;
          this.localization.requestLocalizations(language, (localizationsLoadSuccess: boolean) => {
            resolve();
          });
        } else {
          resolve();
        }
      });
    });
  }

  private registerSvgIcons(svgIcons: Array<ISvgIconVO>) {
    svgIcons.forEach(
      (svgIcon: ISvgIconVO) => {
        this.matIconRegistry.addSvgIcon(
          svgIcon.id,
          this.domSanitizer.bypassSecurityTrustResourceUrl(svgIcon.path)
        );
      }
    );
  }
}

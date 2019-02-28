import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'getText'
})
export class LocalizationPipe implements PipeTransform {
    constructor(private localization: LocalizationService) { }

    transform(localizationId: string): string {
        return this.localization.getText(localizationId);
    }
}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

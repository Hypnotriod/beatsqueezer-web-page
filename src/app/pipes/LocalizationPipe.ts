import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';

@Pipe({ name: 'getText' })
export class LocalizationPipe implements PipeTransform {
    constructor(private localization: LocalizationService) { }

    transform(localizationId: string): string {
        return this.localization.getText(localizationId);
    }
}

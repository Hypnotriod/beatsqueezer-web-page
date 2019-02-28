import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization/localization.service';
import { IAboutVO } from 'src/app/services/configuration/IConfigurations';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public aboutVO: IAboutVO;

  constructor(public configurationService: ConfigurationService, public localizationService: LocalizationService) {
    this.aboutVO = configurationService.configurationVO.about;
  }

  ngOnInit() {
  }

}

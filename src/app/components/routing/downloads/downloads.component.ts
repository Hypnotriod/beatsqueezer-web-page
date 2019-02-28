import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { IDownloadVO } from 'src/app/services/configuration/IConfigurations';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  public downloads: Array<IDownloadVO>;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.downloads = this.configurationService.configurationVO.downloads;
  }

  public navigateToUrl(url: string) {
    window.open(url, '_blank');
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { IVideoVO } from 'src/app/services/configuration/IConfigurations';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Array<IVideoVO>;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.videos = this.configurationService.configurationVO.videos;
  }

}

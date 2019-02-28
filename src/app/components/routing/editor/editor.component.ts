import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization/localization.service';
import { IEditorVO } from 'src/app/services/configuration/IConfigurations';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public editorVO: IEditorVO;

  constructor(public configurationService: ConfigurationService, public localizationService: LocalizationService) {
    this.editorVO = configurationService.configurationVO.editor;
  }

  ngOnInit() {
  }

}

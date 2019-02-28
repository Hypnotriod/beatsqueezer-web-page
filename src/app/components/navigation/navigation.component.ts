import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { INavigationVO, INavigationBarVO } from 'src/app/services/configuration/IConfigurations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public navigationVO: INavigationVO;
  public navBarVO: INavigationBarVO;

  public isHandset: Observable<boolean> = this.breakpointObserver.observe(
    ['(min-width: ' + this.configuration.configurationVO.layout.sideNavCollapseWidth + ')'])
    .pipe(
      map(result => !result.matches)
    );

  constructor(
    private configuration: ConfigurationService,
    private breakpointObserver: BreakpointObserver) {
    this.navigationVO = configuration.configurationVO.navigation;
    this.navBarVO = configuration.configurationVO.navigationBar;
  }

  public navigateToUrl(url: string) {
    window.open(url, '_blank');
  }

}

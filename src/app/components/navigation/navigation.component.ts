import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
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
  public isToolbarSticky: boolean = false;

  @ViewChild('toolbarWrapper') toolbarWrapper: ElementRef;

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

  @HostListener('window:scroll', ['$event']) onScrollEvent(event: Event) {
    let scrollY: number = (event.currentTarget as Window).scrollY;
    this.isToolbarSticky = scrollY >= this.toolbarWrapper.nativeElement.offsetTop;
  }

  public navigateToUrl(url: string) {
    window.open(url, '_blank');
  }

}

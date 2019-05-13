import { NgModule, APP_INITIALIZER, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatCheckboxModule, MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutComponent } from './components/routing/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { InitializationService } from './services/initialization/initialization.service';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadsComponent } from './components/routing/downloads/downloads.component';
import { PhotosComponent } from './components/routing/photos/photos.component';
import { VideosComponent } from './components/routing/videos/videos.component';
import { FeaturesComponent } from './components/routing/features/features.component';
import { EditorComponent } from './components/routing/editor/editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocalizationPipe } from './pipes/LocalizationPipe';
import { SafePipe } from './pipes/SafePipe';
import { NoCachePipe } from './pipes/NoCachePipe';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'editor', component: EditorComponent },
  { path: '**', component: AboutComponent }
];

export function init_app(initializationService: InitializationService) {
  return () => initializationService.init();
}

@NgModule({
  declarations: [
    LocalizationPipe,
    SafePipe,
    NoCachePipe,
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent,
    DownloadsComponent,
    PhotosComponent,
    VideosComponent,
    FeaturesComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatMenuModule,
    HttpClientModule,
    NgxImageGalleryModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
  ],
  providers: [
    NoCachePipe,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [InitializationService], multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.document.body.classList.remove('loading');
  }
}

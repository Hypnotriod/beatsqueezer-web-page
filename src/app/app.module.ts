import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatCheckboxModule, MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/routing/about/about.component';
import { DownloadsComponent } from './components/routing/downloads/downloads.component';
import { EditorComponent } from './components/routing/editor/editor.component';
import { FeaturesComponent } from './components/routing/features/features.component';
import { ManualComponent } from './components/routing/manual/manual.component';
import { PhotosComponent } from './components/routing/photos/photos.component';
import { VideosComponent } from './components/routing/videos/videos.component';
import { LocalizationPipe } from './pipes/LocalizationPipe';
import { NoCachePipe } from './pipes/NoCachePipe';
import { SafePipe } from './pipes/SafePipe';
import { InitializationService } from './services/initialization/initialization.service';




const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'editor', component: EditorComponent },
  { path: '**', component: AboutComponent }
];

export function init_app(initializationService: InitializationService): () => Promise<void> {
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
    EditorComponent,
    ManualComponent
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
    RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true, scrollPositionRestoration: 'enabled' })
  ],
  providers: [
    NoCachePipe,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [InitializationService], multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() { }
}

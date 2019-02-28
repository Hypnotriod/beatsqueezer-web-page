import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { IPhotoVO } from 'src/app/services/configuration/IConfigurations';
import { NgxImageGalleryComponent, GALLERY_CONF, GALLERY_IMAGE } from 'ngx-image-gallery';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  public photos: Array<IPhotoVO> = [];
  public columnsNum: Observable<number> = this.breakpointObserver.observe(
    // ['(min-width: ' + this.configuration.configurationVO.layout.sideNavCollapseWidth + ')'])
    ['(min-width: 520px)'])
    .pipe(
      map(result => result.matches ? 2 : 1)
    );

  public gallery_config: GALLERY_CONF = {
    imageOffset: '5px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  public gallery_images: GALLERY_IMAGE[] = [];

  constructor(
    private configurationService: ConfigurationService,
    private configuration: ConfigurationService,
    private breakpointObserver: BreakpointObserver) { }

  protected updateGallery() {
    this.photos = this.configurationService.configurationVO.photos;
    this.gallery_images = [];
    this.photos.forEach((photo: IPhotoVO) => {
      this.gallery_images.push({
        url: photo.fullSizeUrl,
        thumbnailUrl: photo.previewUrl
      });
    });
  }

  public openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  ngOnInit() {
    this.updateGallery();
  }

}

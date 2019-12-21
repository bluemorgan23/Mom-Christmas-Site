import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mom-christmas-app';

  slides = [
    {
      url: '../assets/MomPhotos/BaileyStationSchoolSupplies.jpg'
    },
    {
      url: '../assets/MomPhotos/JuniorAuxillary.jpg'
    }
    ,
    {
      url: '../assets/MomPhotos/MomGirlScouts.jpg'
    },
    {
      url: '../assets/MomPhotos/MomStaceySplitPhoto.jpg'
    },
    {
      url: '../assets/MomPhotos/MomStaceyBeachWedding.jpg'
    },
    {
      url: '../assets/MomPhotos/MomStaceyChrisGapTooth.jpg'
    },
    {
      url: '../assets/MomPhotos/JuniorAuxillary.jpg'
    },
    {
      url: '../assets/MomPhotos/JuniorAuxillary.jpg'
    },
    {
      url: '../assets/MomPhotos/JuniorAuxillary.jpg'
    }
  ]
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { pictureADayService } from '../../../services/apis/pictureADay.service';
import { PictureADay } from '../../../models/pictureADay.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened = false;
  isMenuOpen = true;
  contentMargin = 240;
  public pictureADay: PictureADay;
  public subscriptions = new Subscription();

  constructor(
    private pictureService: pictureADayService,
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.pictureService.GetPictureADay().subscribe((pictureADay: PictureADay) => {
        this.pictureADay = pictureADay;
      })
    )
  }


  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/services/static/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public currentRoute: string;

  isMenuOpen = true;
  contentMargin = 240;
  public subscriptions = new Subscription();



  constructor(
    private storageService: StorageService,
    ) { }

  ngOnInit() {

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

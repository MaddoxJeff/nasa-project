import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  opened = false;
  isMenuOpen = true;
  contentMargin = 240;

  constructor(
    private router: Router,
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

  onChangeRouteNeo() {
    //console.log(this.activatedRoute.pathFromRoot.concat());
    //console.log(this.router.url);
    this.router.navigate(['../neo']);
  }

  onChangeRouteMars() {
    //console.log(this.activatedRoute.pathFromRoot.concat());
    //console.log(this.router.url);
    this.router.navigate(['../mars']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MatSliderChange } from '@angular/material';

// Services
import { nearEarthOrbitService } from '../../../services/apis/neo.service';
import * as d3 from "d3";

// Models
import { nearEarthOrbit, nearEarthOrbitDate } from '../../../models/neo.model';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.scss']
})
export class NeoComponent implements OnInit {
  examples = [
    {
        title: 'Line Chart',
        route: '/display-neo'
    }
  ];

  opened = false;
  isMenuOpen = true;
  contentMargin = 240;
  currentRoute: string = "neo";
  NearEarthOrbit: nearEarthOrbit;
  neoDate: nearEarthOrbitDate;
  neoList: nearEarthOrbitDate[] = [];
  totalAsteroid: number;
  public subscriptions = new Subscription();

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 744; // hours
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nearEarthObritservice: nearEarthOrbitService
  ) { }

  ngOnInit() {

    this.subscriptions.add(
      this.nearEarthObritservice.GetNeoByJanOne().subscribe((neoDate: nearEarthOrbitDate) => {
        this.neoDate = neoDate;
        this.neoList.push(this.neoDate);
      })
    )

    console.log(this.neoList);

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


  onChangeRouteMars() {
    //console.log(this.activatedRoute.pathFromRoot.concat());
    //console.log(this.router.url);
    this.router.navigate(['../mars']);
  }

  onChangeRouteAbout() {
    //console.log(this.activatedRoute.pathFromRoot.concat());
    //console.log(this.router.url);
    this.router.navigate(['../about']);
  }

  
  



}

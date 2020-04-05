import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
//import * as moment from '../../../../../node_modules/angular-moment';
// Services
import { marsService } from 'src/app/services/apis/mars.service';
import { UtilityService } from 'src/app/services/static/utility.service';
import { StorageService } from 'src/app/services/static/storage.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material';
import { NativeDateAdapter } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/components/pages/mars/format-datepicker';
// Models
import { CuriosityModel, Camera } from 'src/app/models/curiosity.model';
var d = new Date();
d.setDate(d.getDate() - 3);
var yyyy = d.getFullYear;
var mm = d.getMonth;
var dd = d.getDay;

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss'],
  providers: [DatePipe, UtilityService, {provide: DateAdapter, useClass: AppDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}]
})

export class MarsComponent implements OnInit {
  
  

  //date = new FormControl(new Date());
  dateSel = new Date();
  //const momentDate = new Date(date);


  s: string;
  public currentRoute: string;
  displayedColumns: string[] = ['id', 'name'];
  isMenuOpen = true;
  contentMargin = 240;
  public myDate: string = "2017-9-28";
  todaysDate: string;
  public curiosityModel: CuriosityModel;
  public startDate: Date;
  public minDate = new Date(2012, 7, 6);
  public maxDate = new Date(2019, 11, 25);
  //public url: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=';

  public subscriptions = new Subscription();

  constructor(
    //private datePipe: DatePipe,
    private storageService: StorageService,
    private marsservice: marsService,
    private datePipe: DatePipe,
    private router: Router,
    private activatedRoute: ActivatedRoute,

    //private http: HttpClient,
    ) {
      this.storageService.currentRoute.subscribe();
     }

  ngOnInit() {

    this.subscriptions.add(
      this.marsservice.GetCuriosityPhotosByDate(this.myDate).subscribe((curiosityModel: CuriosityModel) => {
        this.curiosityModel = curiosityModel;

      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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

  onChangeRouteAbout() {
    //console.log(this.activatedRoute.pathFromRoot.concat());
    //console.log(this.router.url);
    this.router.navigate(['../about']);
  }

  onDateSelected() {
    this.subscriptions.add(
      this.marsservice.GetCuriosityPhotosByDate(this.formatDate(this.startDate)).subscribe((curiosityModel: CuriosityModel) => {
        this.curiosityModel = curiosityModel;

      })
    )
    this.myDate = this.formatDate(this.startDate);

  }

  updateButton() {

    console.log(this.formatDate(this.startDate));
  }
  formatDate(date: Date) {
    let day: string = date.getDate().toString();
    day = +day < 10 ? "0" + day: day;
    let month: string = (date.getMonth() + 1).toString();
    month = +month < 10 ? "0" + month : month;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }



}

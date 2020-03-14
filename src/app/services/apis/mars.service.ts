// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { UtilityService } from 'src/app/services/static/utility.service';

// Models
import { Cameras, Camera, CuriosityRover, CuriosityModel, Photos } from 'src/app/models/curiosity.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class marsService {
    //public baseUrl: string = environment.endpoint;
    //public baseUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=';
     constructor(
         private http: HttpClient
     ) { }

     GetCuriosityPhotosByDate(date: string): Observable<CuriosityModel> {
         //const url: string = this.baseUrl + date + '&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
         const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
         //return <CuriosityModel>(url).pipe(
         return this.http.get<CuriosityModel>(url).pipe(
             map(UtilityService.extractData)
         );
     }

     getMarsInfo(date: string): Observable<CuriosityModel> {
         return this.http.get<CuriosityModel>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd');
     }
}
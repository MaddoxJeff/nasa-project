// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { UtilityService } from 'src/app/services/static/utility.service';

// Models
import { PictureADay } from 'src/app/models/pictureADay.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class pictureADayService {
    //public baseUrl: string = environment.endpoint;
    //public baseUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=';
     constructor(
         private http: HttpClient
     ) { }

     GetPictureADay(): Observable<PictureADay> {
         const url = 'https://api.nasa.gov/planetary/apod?api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
         //return <CuriosityModel>(url).pipe(
         return this.http.get<PictureADay>(url).pipe(
             map(UtilityService.extractData)
         );
     }
}
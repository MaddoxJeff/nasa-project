// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { UtilityService } from 'src/app/services/static/utility.service';

// Models
import { nearEarthOrbit, nearEarthOrbitDate } from 'src/app/models/neo.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class nearEarthOrbitService {
     constructor(
         private http: HttpClient
     ) { }

     GetNeo(): Observable<nearEarthOrbit> {
         const url = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
         //return <CuriosityModel>(url).pipe(
         return this.http.get<nearEarthOrbit>(url).pipe(
             map(UtilityService.extractData)
         );
     }

     GetNeoByJanOne(): Observable<nearEarthOrbitDate> {
        const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-01&end_date=2020-01-07&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
        //return <CuriosityModel>(url).pipe(
        return this.http.get<nearEarthOrbitDate>(url).pipe(
            map(UtilityService.extractData)
        );
    }
    GetNeoByJanTwo(): Observable<nearEarthOrbitDate> {
        const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-08&end_date=2020-01-14&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
        //return <CuriosityModel>(url).pipe(
        return this.http.get<nearEarthOrbitDate>(url).pipe(
            map(UtilityService.extractData)
        );
    }
    GetNeoByJanThree(): Observable<nearEarthOrbitDate> {
        const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-15&end_date=2020-01-21&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
        //return <CuriosityModel>(url).pipe(
        return this.http.get<nearEarthOrbitDate>(url).pipe(
            map(UtilityService.extractData)
        );
    }
    GetNeoByJanFour(): Observable<nearEarthOrbitDate> {
        const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-22&end_date=2020-01-28&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
        //return <CuriosityModel>(url).pipe(
        return this.http.get<nearEarthOrbitDate>(url).pipe(
            map(UtilityService.extractData)
        );
    }
    GetNeoByJanFive(): Observable<nearEarthOrbitDate> {
        const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-01-29&end_date=2020-01-31&api_key=3nUSgM013NsIXwSBgWObauZnDZWZlu8L4ePYsVcd';
        //return <CuriosityModel>(url).pipe(
        return this.http.get<nearEarthOrbitDate>(url).pipe(
            map(UtilityService.extractData)
        );
    }
}
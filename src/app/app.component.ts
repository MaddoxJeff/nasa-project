import { Component } from '@angular/core';
import { AccountSmall } from './models/account.model';
import { Subscription } from 'rxjs';
import { Router, RoutesRecognized } from '@angular/router';
import { AuthenticationService } from './services/apis/authentication.service';
import { AccountService } from './services/apis/account.service';
import { StorageService } from './services/static/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marsProj';
  public isLoggedIn = false;
  public currentRoute: string;
  public showHeaderFooter = true;
  public exceptionPages = ['login', 'not-found', 'not-authorized', 'password-reset'];
  public account: AccountSmall;
  public subscriptions = new Subscription();

  //d3



  //d3 end




  

  constructor(
    //private router: Router,
    private authService: AuthenticationService,
    private accountService: AccountService,
    private storageService: StorageService,
    private router: Router
  ) { 
    //d3 start

    //d3 end
    this.storageService.currentRoute.subscribe((currentRoute) => {
      this.showHeaderFooter = true;

      if (currentRoute) {
        this.currentRoute = currentRoute;
        for (let i = 0; i < this.exceptionPages.length; i++) {
          if (currentRoute.includes(this.exceptionPages[i])) {
            this.showHeaderFooter = false;
          }
        }
      }
    })

  }





  
  ngOnInit() {
    
    this.authService.isLoggedIn.next(this.authService.IsLoggedIn());

    this.subscriptions.add(
      this.authService.isLoggedIn.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;

        if (this.isLoggedIn) {
          this.subscriptions.add(
            this.accountService.GetLoggedInAccount().subscribe((account: AccountSmall) => {
              this.account = account;
            })
          )
        }
      })
    )

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }



  onMarsSelect() {
    this.router.navigate(['/mars']);
  }
}

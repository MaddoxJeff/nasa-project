// Imports
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Models
import { AccountSmall } from '../../models/account.model';

@Injectable()
export class StorageService {
    public account = new BehaviorSubject<AccountSmall>(null);
    public notificationStatus = new BehaviorSubject<boolean>(null);
    public accountToken = new BehaviorSubject<string>(null);
    public currentRoute = new BehaviorSubject<string>(null);
}
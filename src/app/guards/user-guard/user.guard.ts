import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NzNotificationService} from 'ng-zorro-antd/notification';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private notificationService: NzNotificationService){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(LocalStorageService.isAdminLoggedIn()){
        this.router.navigateByUrl("/admin/dashboard");
        this.notificationService.error("ERROR","You don't have access of this page", {nzDuration: 5000});
        return false;
     }else if (!LocalStorageService.hasToken()){
        LocalStorageService.signOut();
        this.router.navigateByUrl("/login");
        this.notificationService.error("ERROR","You are not logged in. Please login", {nzDuration: 5000});
         return false;
     }
     return true;
  }
  
}

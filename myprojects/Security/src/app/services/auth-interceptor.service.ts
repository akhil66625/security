import { UserResourceService } from './../api/services/user-resource-service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class AuthInterceptorService implements HttpInterceptor {

    constructor(private userResourceService: UserResourceService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.userResourceService.isAuthenticated();
      console.log(token, 'geting token via interceptr');

      // All HTTP requests are going to go through this method
      let newHeaders = req.headers;
      if (token) {

        console.log(token, 'getting token');
        newHeaders = newHeaders.append('Authorization', `Bearer ${token}`);
      }
      const authReq = req.clone({ headers: newHeaders });
      return next.handle(authReq);
    }
  }

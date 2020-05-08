import { AuthInterceptorService } from './../../services/auth-interceptor.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserResourceService {
  private REST_SERVER_URL = `${environment .urlService.url}`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  createUser(user) {
    const url = this.REST_SERVER_URL + '/user/signup';
    return this.httpClient.post(url, user );

  }


  loginUser(user) {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', user.username);
    formData.append('password', user.password);

    const url = this.REST_SERVER_URL + '/login';
    return this.httpClient.post(url, formData );
      }
  getToken() {

  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbIm9wZW5pZCJdLCJuYW1lIjoiQURNSU4iLCJleHAiOjE1OTE1MTQzNjAsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6IjU5MDkzOGUzLThjYWEtNGM3OC05MGY1LTIyNzA0NzE1OTJlYiIsImNsaWVudF9pZCI6InV2aW9uaWNzIn0.a7P7YXHDxRgHtN09X9CdFBBnnPUmM6ymIgHGQvWkSeRcqroJu8UZKDalY9LMGNFty0EkDUW6i8kNDm06KyGyHkW0Kpx2xScGw1oBAiV2DZ9AW2TZedl4b3o9IqCZGD_DNen842GsEJq8K5YVT-3V9jlqrdgo1uEntV8iQJWNiKNzxwt3kcBrMmfXWlDJZlyNEPeDzoTEZ4kccpAr1-GVAZlDoGclv8m5XsPgN_ccxckaWmtW5nK3yKdAps04gt3j8-1h68Isc8PR8PZ6M3A3XGbFYUG3DKz9MDEFuRQ0sXcBstrOBtDtUEKOBFz7W4DtBtUIPAB-Go7EbinB8rBg-A';
  localStorage.setItem('token', token);

    console.log(token, 'resource token');

  return localStorage.getItem('token');
  }
  getAllUser() {
    const url = this.REST_SERVER_URL + '/user/all';
    // const options = this.getRequestOption();
    return this.httpClient.get(url);
  }

  // getRequestOption() {

  //   const headers = new Headers({
  //     'Authorization': 'Bearer ' + this.token
  //   });
  // }
  isAuthenticated() {
    const tokn = this.getToken();
    console.log(tokn, 'isauthentication is working');

    return tokn;
  }

}


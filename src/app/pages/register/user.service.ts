import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public register(user: any) {
    return this.http
    .post(environment.ApiUrl + 'users', user)
    .pipe(
      map((res: any) => {
        return res;
      }),
      take(1)
    )
    .toPromise();

  }

}

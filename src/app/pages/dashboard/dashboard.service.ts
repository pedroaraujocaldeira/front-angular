import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient) {}

  public getListAllUser(): Promise<any> {
    return this.http
      .get(environment.ApiUrl + 'users')
      .pipe(
        map((res: any) => {
          return res;
        }),
        take(1)
      )
      .toPromise();
  }

}

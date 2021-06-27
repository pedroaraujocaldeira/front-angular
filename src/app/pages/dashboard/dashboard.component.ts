import { AuthService } from 'src/app/core/auth/auth.service';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

export interface PeriodicElement {
  id: number;
  name: string;
  cpf: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'cpf'];
  dataSource = ELEMENT_DATA;
  constructor(public dashboardService: DashboardService, public authService: AuthService) { }

  ngOnInit(): void {
    this.dashboardService.getListAllUser().then((data) => {
      this.dataSource =  data.rows.map((user: any) => {
        return { id: user.id, name: user.name, cpf: user.cpf }
      } );
    })
  }

  logout() {
    this.authService.logout().toPromise();
  }

}

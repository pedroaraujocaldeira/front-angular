import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

export interface PeriodicElement {
  name: string;
  id: number;
  cpf: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cpf: '077464654', id: 56, name: 'asfasd'}
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'cpf'];
  dataSource = ELEMENT_DATA;
  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getListAllUser().then((data) => {
      console.log(data)

      data.rows.map((user: any) => {
        ELEMENT_DATA.push({cpf: user.cpf, id: user.id, name: user.name})
      } );
    })
  }

}

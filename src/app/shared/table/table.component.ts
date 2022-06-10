import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  orgName: string;
  email: string;
  contactNo: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'orgName',
      header: 'Organization Name',
      cell: (element: PeriodicElement) => `${element.orgName}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: PeriodicElement) => `${element.email}`,
    },
    {
      columnDef: 'contactNo',
      header: 'Contact No.',
      cell: (element: PeriodicElement) => `${element.contactNo}`,
    },
  ];
  @Input() dataSource: any;
  
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {

  }

}

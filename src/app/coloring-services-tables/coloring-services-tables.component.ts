import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ColoringService {
  description: string;
  setup: number;
  retail: number;
  serviceId: string;
}

const ELEMENT_DATA: ColoringService[] = [
  {setup: 15, description: 'Base Break', retail: 55.00, serviceId: 'BB'},
  {setup: 45, description: 'Base Break/Face Frame Foils', retail: 110.00, serviceId: 'bbFF'},
  {setup: 75, description: 'Base Break/Full Head Foils', retail: 180.00, serviceId: 'bbFH'},
  {setup: 60, description: 'Base Break/Half Head Foils', retail: 155.00, serviceId: 'bbHH'},
  {setup: 60, description: 'Base Break/T-Section', retail: 120.00, serviceId: 'bbT'},
  {setup: 60, description: 'Color Block', retail: 105.00, serviceId: 'c/b'},
  {setup: 45, description: 'Color Remover', retail: 65.00, serviceId: 'cr'},
  {setup: 0, description: 'Colors Charges', retail: 10.00, serviceId: 'cc'},
  {setup: 60, description: 'Double Process', retail: 110.00, serviceId: 'DP'},
  {setup: 0, description: 'Extra Color', retail: 25.00, serviceId: 'ec'},
  {setup: 30, description: 'Eyebrow and Lash Tint', retail: 45.00, serviceId: 'elbt'},
  {setup: 45, description: 'Eyelash Tint', retail: 30.00, serviceId: 'elt'},
  {setup: 60, description: 'Eyelash Tint and Perm', retail: 85.00, serviceId: 'elt/p'},
  {setup: 15, description: 'Eyebrow Tint', retail: 15.00, serviceId: 'ebt'},
  {setup: 30, description: 'Face Frame Foil', retail: 60.00, serviceId: 'FFF'},
  {setup: 60, description: 'Full Head Foil', retail: 125.00, serviceId: 'FHF'},
  {setup: 60, description: 'Full Head Painting', retail: 125.00, serviceId: 'FHPT'},
  {setup: 15, description: 'Glaze/Semi Perm', retail: 50.00, serviceId: 'G'},
  {setup: 60, description: 'Half Head Foil', retail: 100.00, serviceId: 'HHF'},
  {setup: 45, description: 'Low Lights', retail: 50.00, serviceId: 'LL'},
  {setup: 30, description: 'Melted Root', retail: 25.00, serviceId: 'MR'},
  {setup: 60, description: 'Ombre - Painting/Full Head w/Glaze', retail: 135.00, serviceId: 'om'},
  {setup: 30, description: 'Painting', retail: 60.00, serviceId: 'pt'},
  {setup: 30, description: 'Single Process', retail: 55.00, serviceId: 'SP'},
  {setup: 45, description: 'Single Process and Painting', retail: 110.00, serviceId: 'SPPT'},
  {setup: 60, description: 'Single Process T-Section', retail: 120.00, serviceId: 'SPT'},
  {setup: 30, description: 'Single Process with Glaze', retail: 105.00, serviceId: 'SPG'},
  {setup: 45, description: 'Single Process/Face Frame', retail: 110.00, serviceId: 'SPFF'},
  {setup: 75, description: 'Single Process/Full Head Foil', retail: 180.00, serviceId: 'SPFH'},
  {setup: 75, description: 'Single Process/Half Head Foil', retail: 155.00, serviceId: 'SPHH'},
  {setup: 90, description: 'Single Process/Ombre with Glaze', retail: 190.00, serviceId: 'spom'},
  {setup: 15, description: 'Toner Glaze (Jenny)', retail: 50.00, serviceId: 'TG'},
  {setup: 30, description: 'T-Section', retail: 70.00, serviceId: 'TSEC'}
];

@Component({
  selector: 'app-coloring-services-tables',
  templateUrl: './coloring-services-tables.component.html',
  styleUrls: ['./coloring-services-tables.component.scss']
})
export class ColoringServicesTables implements OnInit {
    displayedColumns: string[] = ['serviceId', 'description', 'retail', 'setup']; 
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}

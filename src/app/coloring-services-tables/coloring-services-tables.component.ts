import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface ColoringService {
  description: string;
  setup: number;
  retail: number;
  serviceId: string;
}

const ELEMENT_DATA: ColoringService[] = [
  {setup: 15, description: 'Base Break', retail: 55, serviceId: 'BB'},
  {setup: 45, description: 'Base Break/Face Frame Foils', retail: 110, serviceId: 'bbFF'},
  {setup: 75, description: 'Base Break/Full Head Foils', retail: 180, serviceId: 'bbFH'},
  {setup: 60, description: 'Base Break/Half Head Foils', retail: 155, serviceId: 'bbHH'},
  {setup: 60, description: 'Base Break/T-Section', retail: 120, serviceId: 'bbT'},
  {setup: 60, description: 'Color Block', retail: 105, serviceId: 'c/b'},
  {setup: 45, description: 'Color Remover', retail: 65, serviceId: 'cr'},
  {setup: 0, description: 'Colors Charges', retail: 10, serviceId: 'cc'},
  {setup: 60, description: 'Double Process', retail: 110, serviceId: 'DP'},
  {setup: 0, description: 'Extra Color', retail: 25, serviceId: 'ec'},
  {setup: 30, description: 'Eyebrow and Lash Tint', retail: 45, serviceId: 'elbt'},
  {setup: 45, description: 'Eyelash Tint', retail: 30, serviceId: 'elt'},
  {setup: 60, description: 'Eyelash Tint and Perm', retail: 85, serviceId: 'elt/p'},
  {setup: 15, description: 'Eyebrow Tint', retail: 15, serviceId: 'ebt'},
  {setup: 30, description: 'Face Frame Foil', retail: 60, serviceId: 'FFF'},
  {setup: 60, description: 'Full Head Foil', retail: 125, serviceId: 'FHF'},
  {setup: 60, description: 'Full Head Painting', retail: 125, serviceId: 'FHPT'},
  {setup: 15, description: 'Glaze/Semi Perm', retail: 50, serviceId: 'G'},
  {setup: 60, description: 'Half Head Foil', retail: 100, serviceId: 'HHF'},
  {setup: 45, description: 'Low Lights', retail: 50, serviceId: 'LL'},
  {setup: 30, description: 'Melted Root', retail: 25, serviceId: 'MR'},
  {setup: 60, description: 'Ombre - Painting/Full Head w/Glaze', retail: 135, serviceId: 'om'},
  {setup: 30, description: 'Painting', retail: 60, serviceId: 'pt'},
  {setup: 30, description: 'Single Process', retail: 55, serviceId: 'SP'},
  {setup: 45, description: 'Single Process and Painting', retail: 110, serviceId: 'SPPT'},
  {setup: 60, description: 'Single Process T-Section', retail: 120, serviceId: 'SPT'},
  {setup: 30, description: 'Single Process with Glaze', retail: 105, serviceId: 'SPG'},
  {setup: 45, description: 'Single Process/Face Frame', retail: 110, serviceId: 'SPFF'},
  {setup: 75, description: 'Single Process/Full Head Foil', retail: 180, serviceId: 'SPFH'},
  {setup: 75, description: 'Single Process/Half Head Foil', retail: 155, serviceId: 'SPHH'},
  {setup: 90, description: 'Single Process/Ombre with Glaze', retail: 190, serviceId: 'spom'},
  {setup: 15, description: 'Toner Glaze (Jenny)', retail: 50, serviceId: 'TG'},
  {setup: 30, description: 'T-Section', retail: 70, serviceId: 'TSEC'}
];

@Component({
  selector: 'app-coloring-services-tables',
  templateUrl: './coloring-services-tables.component.html',
  styleUrls: ['./coloring-services-tables.component.scss']
})
export class ColoringServicesTables implements OnInit {
  displayedColumns: string[] = ['select', 'serviceId', 'description', 'retail', 'setup']; 
  dataSource = new MatTableDataSource<ColoringService>(ELEMENT_DATA);
  selection = new SelectionModel<ColoringService>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ColoringService): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.setup + 1}`;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}

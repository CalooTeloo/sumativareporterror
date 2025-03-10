import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../../Models/report.mode';

@Component({
  selector: 'app-report-item',
  imports: [],
  templateUrl: './report-item.component.html',
  styleUrl: './report-item.component.css'
})
export class ReportItemComponent {
route= inject(Router);
@Input() item!: Report;

navigateToID() {
  this.route.navigate(['/report', this.item.id]	)
}
}

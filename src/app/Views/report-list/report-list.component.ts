import { Component, inject } from '@angular/core';
import { ReportService } from '../../Services/report.service';
import { Report } from '../../Models/report.mode';
import { NgFor } from '@angular/common';
import { ReportItemComponent } from '../../Components/report-item/report-item.component';

@Component({
  selector: 'app-report-list',
  imports: [NgFor,ReportItemComponent],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.css'
})
export class ReportListComponent {
  reportService = inject(ReportService);

  listaReports: Report[] = this.reportService.getReports();
}

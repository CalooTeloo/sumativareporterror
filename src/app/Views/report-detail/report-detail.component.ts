import { Component, inject } from '@angular/core';
import { Report } from '../../Models/report.mode';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../../Services/report.service';

@Component({
  selector: 'app-report-detail',
  imports: [],
  templateUrl: './report-detail.component.html',
  styleUrl: './report-detail.component.css'
})
export class ReportDetailComponent {
  reportselected!: Report;

  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);
  private ReportService = inject(ReportService);

  constructor() {
    this.Aroute.params.subscribe(params => {
      const id = params['id'];

      const report = this.ReportService.getReportById(Number(id));
      console.log(report);

      if (!report) {
        console.log('Report Not Found');
        this.route.navigate(['not-found', id]);
      } else {
        this.reportselected = report;
      }
    });
  }

  gotoHome(): void {
    this.route.navigate(['']);
  }

}

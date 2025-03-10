import { Injectable } from '@angular/core';
import { Report } from '../Models/report.mode';

@Injectable({
  providedIn: 'root',
})
export class ReportService {

  private listaReports: Report[] = [];

  constructor() { }

  getReports(): Report[] {
    return this.listaReports;
  }

  getReportById(id:number): Report | undefined {
   for (let i=0; i< this.listaReports.length; i++){
    if (this.listaReports[i].id === id){
      return this.listaReports[i];
    }
   }
   return undefined;
  }

}



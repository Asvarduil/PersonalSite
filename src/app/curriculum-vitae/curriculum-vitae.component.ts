import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CollapsiblePanelData } from '@app/shared/collapsible-panel/collapsible-panel.component';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurriculumVitaeComponent implements OnInit {
  public isLoading: boolean = true;
  public jobs: JobEntry[] = [];

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    console.info('Began loading CV data...');

    this.http.get('/assets/cv.json')
      .subscribe((result: any) => {
        this.isLoading = false;
        this.jobs = result["entries"];
        console.info('CV loaded.');
      }, (error: any) => {
        let errorDump = JSON.stringify(error);
        console.error(errorDump);
      });
  }

  getJobPanelData(sourceData: JobEntry): CollapsiblePanelData {
    return {
      headline: sourceData.placeOfWork,
      subhead: sourceData.position,
      detailHtml: `<p><strong>Started:</strong> ${sourceData.startDate}</p>` 
        + `<p><strong>Duties:</strong> ${sourceData.duties}</p>`
        + `<p><strong>Technologies Used:</strong> ${sourceData.technologyUsed}</p>`
    };
  }
}

export class JobEntry {
  placeOfWork: string = '';
  position: string = '';
  startDate: string = '';
  endDate: string = '';
  duties: string = '';
  technologyUsed: string = '';
  isExpanded: boolean = false;
}

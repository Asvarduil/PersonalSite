import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechnologyComponent implements OnInit {
  isLoading: boolean = true;
  technologies: Technology[] = [];
  results: Technology[] = [];

  constructor(public http: HttpClient) { 
  }

  ngOnInit(): void {
    console.info('Began loading technology information...');

    this.http.get('/assets/technology.json')
    .subscribe((result: any) => {
      this.isLoading = false;
      this.technologies = result["entries"];
      this.results = JSON.parse(JSON.stringify(this.technologies));
      console.info('Technologies loaded.');
    }, (error: any) => {
      let errorDump = JSON.stringify(error);
      console.error(errorDump);
    });
  }

  applyResults(searchResults: Technology[]) {
    console.info('Received ' + searchResults.length + ' results', searchResults);
    this.results = searchResults;
  }
  
  toggleEntry(entry: Technology) {
    entry.isExpanded = !entry.isExpanded;
  }
}

export var TechnologyTypes = [
  "Language/Front end",
  "Language/Back end",
  "Language/Full stack",
  "Web/Front end",
  "Web/Full stack",
  "Database/Back end",
  "General-purpose/Back end",
  "Reports/Back end",
  "Documentation/Full stack"
];

export var TechnologyClassifications = [
  "Current",
  "Legacy"
];

export class Technology {
  public name: string = '';
  public type: string = '';
  public lastVersionUsed: string = '';
  public classification: string = '';
  public description: string = '';
  public isExpanded: boolean = false;
}
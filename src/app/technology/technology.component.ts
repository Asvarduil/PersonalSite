import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechnologyComponent implements OnInit {
  isLoading: boolean = true;
  technologies: Technology[] = [];

  constructor(public http: HttpClient) { 
  }

  ngOnInit(): void {
    console.info('Began loading technology information...');

    this.http.get('/assets/technology.json')
    .subscribe((result: any) => {
      this.isLoading = false;
      this.technologies = result["entries"];
      console.info('Technologies loaded.');
    }, (error: any) => {
      let errorDump = JSON.stringify(error);
      console.error(errorDump);
    });
  }

}

export class Technology {
  public name: string = '';
  public type: string = '';
  public lastVersionUsed: string = '';
  public classification: string = '';
  public description: string = '';
}
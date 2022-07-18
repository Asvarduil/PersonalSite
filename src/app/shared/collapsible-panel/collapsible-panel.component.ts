import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface CollapsiblePanelData {
  headline: string;
  subhead: string;
  detailHtml: string;
}

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollapsiblePanelComponent implements OnInit {
  @Input() public panelData: CollapsiblePanelData;

  public isExpanded: boolean = false;
  public headline: string = '';
  public subhead: string = '';
  public details: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { 
    this.panelData = {
      headline: '',
      subhead: '',
      detailHtml: ''
    };
  }

  ngOnInit(): void {
    this.mapData(this.panelData);
  }

  private mapData(data: CollapsiblePanelData) {
    this.headline = data.headline;
    this.subhead = data.subhead;
    this.details = this.sanitizer.bypassSecurityTrustHtml(data.detailHtml);
  }

  public onChangeExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}

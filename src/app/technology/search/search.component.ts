import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Technology, TechnologyTypes, TechnologyClassifications } from '../technology.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  @Input() technologies: Technology[] = [];
  @Output() onSearch: EventEmitter<Technology[]> = new EventEmitter<Technology[]>();

  types: string[] = TechnologyTypes;
  classifications: string[] = TechnologyClassifications;

  searchForm: FormGroup;
  nameField: FormControl = new FormControl(null);
  typeDropdown: FormControl = new FormControl(null);
  classificationDropdown: FormControl = new FormControl(null);

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      nameField: this.nameField,
      typeDropdown: this.typeDropdown,
      classificationDropdown: this.classificationDropdown
    });
  }

  ngOnInit(): void { 
  }

  search() {
    let results: Technology[] = this.filterCriteria();
    this.onSearch.emit(results);
  }

  clear() {
    this.nameField.setValue(null);
    this.typeDropdown.setValue(null);
    this.classificationDropdown.setValue(null);
    
    let results: Technology[] = JSON.parse(JSON.stringify(this.technologies));
    for (let current of results) {
      current.isExpanded = false;
    }

    this.onSearch.emit(results);
  }

  private filterCriteria(): Technology[] {
    let results: Technology[] = [];

    // Extract terms from search form controls...
    let invariantNameTerm = this.nameField.value?.toLowerCase();
    let typeTerm = this.typeDropdown.value;
    let classificationTerm = this.classificationDropdown.value;
    
    for (let current of this.technologies) {
      let invariantName = current.name.toLowerCase();
      let nameMatch = !invariantNameTerm || invariantName.includes(invariantNameTerm);
      
      let typeMatch = !typeTerm || typeTerm === current.type;
      let classificationMatch = !classificationTerm || classificationTerm === current.classification;

      if (nameMatch && typeMatch && classificationMatch)
        results.push(current);
    }

    return results;
  }
}

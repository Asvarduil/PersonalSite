import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Technology, TechnologyTypes, TechnologyClassifications } from '../technology.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
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

  private filterCriteria(): Technology[] {
    console.info('Search initiated...');
    let results: Technology[] = [];

    // Extract terms from search form controls...
    let invariantNameTerm = this.nameField.value?.toLowerCase();
    let typeTerm = this.typeDropdown.value;
    let classificationTerm = this.classificationDropdown.value;
    
    for (let current of this.technologies) {
      let invariantName = current.name.toLowerCase();
      let nameMatch = !invariantNameTerm || invariantName.includes(invariantNameTerm);
      if (nameMatch && invariantNameTerm)
        console.info('Name fragment' + invariantNameTerm + ' exists in ' + invariantName);
      
      let typeMatch = !typeTerm || current.type;
      if (typeMatch && typeTerm)
        console.info(current.name + ' is a ' + typeTerm + '-type technology');

      let classificationMatch = !classificationTerm || classificationTerm === current.classification;
      if (classificationMatch && classificationTerm)
        console.info(current.name + ' is classed as ' + classificationTerm);

      if (nameMatch && typeMatch && classificationMatch)
        results.push(current);
    }

    return results;
  }
}

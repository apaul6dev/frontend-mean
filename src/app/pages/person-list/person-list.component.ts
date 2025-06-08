import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../../services/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  imports: [CommonModule],
  template: `
    <h2>Lista de Personas</h2>
    <ul>
      <li *ngFor="let person of persons">
        {{ person.name }} - {{ person.email }}
      </li>
    </ul>
  `
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(data => this.persons = data);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
    _id?: string;
    name: string;
    email: string;
}

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private apiUrl = 'http://localhost:8000/api/persons';

    constructor(private http: HttpClient) { }

    getPersons(): Observable<Person[]> {
        return this.http.get<Person[]>(this.apiUrl);
    }

}

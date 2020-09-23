import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-add-gists',
  templateUrl: './add-gists.component.html',
  styleUrls: ['./add-gists.component.css']
})
export class AddGistsComponent implements OnInit {

  readonly url = 'https://api.github.com';
  gistAdd: Observable<any>;

  gistDescription: string;
  gistName: string;
  gistContent: string;
  gistPublic: boolean;

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

    if (this.gistPublic == null) {
      this.gistPublic = false;
    }
  }
  addGist() {
    const data = {
      'description': `${this.gistDescription}`,
      'public': `${this.gistPublic}`,
      'files': {
        [this.gistName]: {
          'content': `${this.gistContent}`
        }
      }
    }
    const headers = new HttpHeaders({Authorization: 'token f839cddc6df9d6bbc17494f44973ddcfe160101e',
    Accept: 'application/vnd.github.v3+json'});

    this.gistAdd = this.http.post(this.url + '/gists', data, {headers})
  }
}

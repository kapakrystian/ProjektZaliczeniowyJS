import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-gists',
  templateUrl: './edit-gists.component.html',
  styleUrls: ['./edit-gists.component.css']
})
export class EditGistsComponent implements OnInit {

  readonly url = 'https://api.github.com';
  gistEdit: Observable<any>;

  gistID: string;
  gistDescription: string;
  gistName: string;
  gistContent: string;
  gistPublic: boolean;
  gistName2: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.gistPublic == null) {
      this.gistPublic = false;
    }
  }

  editGist() {
    const data = {
      'ID': `${this.gistID}`,
      'description': `${this.gistDescription}`,
      'public': `${this.gistPublic}`,
      'files': {
        [this.gistName]: {
          'filename': `${this.gistName2}`,
          'content': `${this.gistContent}`
        }
      }
    }
    const headers = new HttpHeaders({Authorization: 'token f839cddc6df9d6bbc17494f44973ddcfe160101e',
    Accept: 'application/vnd.github.v3+json'});

    this.gistEdit = this.http.patch(this.url + '/gists/' + this.gistID, data, {headers})
  }
}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-delete-gists',
  templateUrl: './delete-gists.component.html',
  styleUrls: ['./delete-gists.component.css']
})
export class DeleteGistsComponent implements OnInit {

  readonly url = 'https://api.github.com';
  gistDelete: Observable<any>;

  gistID: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  deleteGist() {

    if (confirm('Czy na pewno chcesz usunąć Gist?')) {
      const headers = new HttpHeaders({
        Authorization: 'token f839cddc6df9d6bbc17494f44973ddcfe160101e',
        Accept: 'application/vnd.github.v3=json'
      });

      this.gistDelete = this.http.delete(this.url + '/gists/' + this.gistID, {headers})
    }
    else {
    }
  }
}

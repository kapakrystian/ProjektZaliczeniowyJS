import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GistsData} from '../gistsData';

@Component({
  selector: 'app-listing-gists',
  templateUrl: './listing-gists.component.html',
  styleUrls: ['./listing-gists.component.css']
})
export class ListingGistsComponent implements OnInit {

  readonly urlName = 'https://api.github.com';
  gistsList: GistsData[] = [];
  gistsView: GistsData[] = [];
  gistsFil: GistsData[] = [];
  tableSize = 10;
  beginning = 0;
  userName: string;
  filDescription: string;
  filId: string;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  gistsListing(): void {
    const headers = new HttpHeaders({Authorization: 'token f839cddc6df9d6bbc17494f44973ddcfe160101e',
    Accept: 'application/vnd.github.v3+json'});

    this.http.get<GistsData[]>(this.urlName + '/users/' + this.userName + '/gists', {headers}).subscribe(gists => {

      this.gistsList = gists;
      this.gistsFil = gists;
      this.choosingView();
    })
  }

    previous(): void {
    this.beginning -= this.tableSize;
    if (this.beginning < 0) {
      this.beginning = 0;
    }
    this.choosingView()
    }

    next(): void{
    if (this.beginning + this.tableSize < this.gistsList.length) {
      this.beginning += this.tableSize;
    }
    this.choosingView()
    }

    choosingView(): void{
    this.gistsView = this.gistsList.slice(this.beginning, this.beginning + this.tableSize);
  }

  max_page() {
    return Math.floor(this.gistsList.length / this.tableSize + 1);
  }

  privateGist(): void {
    this.gistsView = this.gistsFil.filter(pub => pub.public === false);
  }

  publicGist(): void {
    this.gistsView = this.gistsFil.filter(pub => pub.public === true);
  }

  descriptionFil(): void {
    this.gistsView = this.gistsFil.filter(des => des.description === this.filDescription);
  }
  IdFil(): void {
    this.gistsView = this.gistsFil.filter(id => id.id === this.filId);
  }
  allGists(): void{
    this.gistsView = this.gistsFil;
  }
}

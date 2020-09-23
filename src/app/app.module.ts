import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddGistsComponent } from './add-gists/add-gists.component';
import { EditGistsComponent } from './edit-gists/edit-gists.component';
import { DeleteGistsComponent } from './delete-gists/delete-gists.component';
import { ListingGistsComponent } from './listing-gists/listing-gists.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddGistsComponent,
    DeleteGistsComponent,
    ListingGistsComponent,
    EditGistsComponent,
    InfoComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

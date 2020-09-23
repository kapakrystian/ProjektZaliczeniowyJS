import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddGistsComponent } from './add-gists/add-gists.component';
import {DeleteGistsComponent} from './delete-gists/delete-gists.component';
import {ListingGistsComponent} from './listing-gists/listing-gists.component';
import {EditGistsComponent} from './edit-gists/edit-gists.component';
import {InfoComponent} from './info/info.component';



const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'add-gists', component: AddGistsComponent},
  {path: 'delete-gists', component: DeleteGistsComponent},
  {path: 'listing-gists', component: ListingGistsComponent},
  {path: 'edit-gists', component: EditGistsComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

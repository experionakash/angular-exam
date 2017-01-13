import { ContactService } from './common/contact.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item.component';
import { SearchPipe } from './common/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditContactComponent,
    ContactListComponent,
    ContactItemComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

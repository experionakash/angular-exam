import { Component, OnInit } from '@angular/core';
import { Mycontact } from "../common/mycontact";
import { ContactService } from "../common/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Mycontact[] = [];
  constructor(private contactService: ContactService) { }

  ngOnInit() {   //loades the contacts from record
    this.contacts = this.contactService.getContacts();
  }

}

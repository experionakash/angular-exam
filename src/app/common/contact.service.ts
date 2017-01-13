import { exists } from 'fs';
import { Injectable } from '@angular/core';
import { Mycontact } from "./mycontact";

@Injectable()
export class ContactService {

  private contacts: Mycontact[] = [];//new Mycontact('8156887372','akash','chandran','thikkodi'),
                                  //  new Mycontact('9895158246','chandran','av','thikkodi')
                                  //  ];

  constructor() { }
  
  getContacts(){  //returns all the contacts
    return this.contacts;
  }

  getContact(id:number){ // return only a specific contact
    return this.contacts[id];
  }

  addNew(contact:Mycontact){  // add new contact
    let isExist:boolean;
    this.contacts.forEach(element => {
      if(element.number === contact.number){ //check if the number already exists.
        alert("Contact already exist . this telephone number is already stored in the name of " + element.firstName);
        isExist=true;
      }
      else
          isExist = false;
    });

    if(!isExist)
      this.contacts.push(contact);
  } 

  editContact(oldContact:Mycontact, newContact:Mycontact){ //edits a contact 
      this.contacts[this.contacts.indexOf(oldContact)] = newContact;
  }  
}

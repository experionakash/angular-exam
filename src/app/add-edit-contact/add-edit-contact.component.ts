import { routerNgProbeToken } from '@angular/router/src/router_module';
import { CredentialDetails } from 'crypto';
import { userInfo } from 'os';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Mycontact } from "../common/mycontact";
import { ContactService } from "../common/contact.service";
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit, OnDestroy {
selectedContact:Mycontact;  // store the currently slected contact by the user.
isNew=true;
isEdit=false;
isView=false;
private subscription : Subscription;
private contactId : number;
  constructor( private contactService:ContactService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(   
      (params: any) => {
        if(params.hasOwnProperty('id') ){   //check if the url has property 'id'
          this.isNew=false;
          this.isView=true;
          this.contactId = params['id'];    //stores the 'id' in the url to a variable 
          this.selectedContact = this.contactService.getContact(this.contactId); // fetch the contact from the service
          console.log(this.selectedContact);
        } 
         if(params.hasOwnProperty('new')){  //check if the url has property 'new'
          this.isNew=true;
          console.log("from new");
          this.selectedContact=null;
        }
         if((params.hasOwnProperty('id')) && (params.hasOwnProperty('edit'))) {  //check if the url has property 'id' and 'edit' then the form contols get enabled
          this.isView=false;
          console.log("fromidedit");
           this.isEdit=true;
        }
      }
    );
  }
  
  onEditContact(editedContact: Mycontact,form : any){     // updates the contact contact details.
    this.contactService.editContact(this.selectedContact, editedContact);
     form.reset();
  }

  addNewContact(contact: Mycontact,form : any){   // add new contact 
    this.contactService.addNew(contact);
    form.reset();
  }

  onClear()   // clears all controls
  {
    console.log("in clear");
    this.selectedContact=null;
  }

  ngOnDestroy()   //unsubscribe the route
  {
    this.subscription.unsubscribe();
  }

}

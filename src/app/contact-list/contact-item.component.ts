import { Component, OnInit, Input } from '@angular/core';
import { Mycontact } from "../common/mycontact";


@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html'
  
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Mycontact;
  @Input() contactId: number;
  constructor() { }

  ngOnInit() {
  }

}

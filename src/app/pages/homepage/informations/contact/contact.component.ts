import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Message } from '../../../../shared/models/message';
import { MessageService } from '../../../../shared/services/message.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    object: [''],
    text: [''],
    mailAuthor: ['']
  });

  newMessage: Message;
  messageOpened = true;

  messages: Message[];
  admin: boolean;
  messagesArray = false;
  thankMessage = false;

  constructor(private fb: FormBuilder, private messageService: MessageService, private userService: UserService) { }



  ngOnInit() {
    this.messageService.getAllMessages().subscribe((data: Message[]) => {
      this.messages = data;
    });
    if (this.userService.admin) {
      this.messageOpened = false;
      this.messagesArray = true;
      this.thankMessage = false;

    }
  }


  onSubmit() {
    this.newMessage = {
      object: this.contactForm.value.object,
      text: this.contactForm.value.text,
      mailAuthor: this.contactForm.value.mailAuthor
    };
    this.messageService.postMessage(this.newMessage).subscribe();
    this.messageOpened = false;
    this.thankMessage = true;
  }


  messageOK(id, i) {
    this.messageService.delete(id).subscribe((data) => {
      this.messages.splice(i, 1);
    });
  }
}

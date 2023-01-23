import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // cache de messages
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }

}

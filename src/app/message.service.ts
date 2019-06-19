import {Injectable} from '@angular/core';

/*
为message组件服务，给message提供要显式的消息，并且从整个系统接收发过来的消息

该服务对外暴露了它的 messages 缓存，以及两个方法：
add() 方法往缓存中添加一条消息，clear() 方法用于清空缓存。
 */


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[];

  constructor() {
    this.messages = [];
  }

  addMessage(message: string): void {
    this.messages.push(message);  // 向消息字符串数组中添加消息
  }

  clearMessages(): void {
    this.messages = [];
  }
}

import {Component, OnInit} from '@angular/core';

// todo 将messageService导入此模块，并注入服务，以从中读取要显示的数据。
import {MessageService} from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private messageService: MessageService; // 模板只能绑定到组件的公共属性！！！！！！

  constructor(messageService: MessageService) {
    this.messageService = messageService; // 注入服务，从服务中心服务读取数据，以让模板文件展示给用户
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';

// todo 将messageService导入此模块，并注入服务，以从中读取要显示的数据。


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

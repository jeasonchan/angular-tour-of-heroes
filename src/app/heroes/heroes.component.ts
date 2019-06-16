import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HEROES} from '../mock-heroes';

@Component({      // @component是装饰器函数，为该组件执行angular所需要的元数据
  selector: 'app-heroes',  // 组件的选择器，css选择器，表明本组件的html元素名称是<app-heroes>，相当于<body>、<h1>之类的
  templateUrl: './heroes.component.html', // 组件模板文件位置
  styleUrls: ['./heroes.component.css']   // 组件私有css样式表文件位置
})
export class HeroesComponent implements OnInit {

  hero: Hero = {id: 1, name: 'WindStorm'}; // 一个属性hero，数据/对象类型是Hero类，并对这个Hero实例进行赋值/初始化

  heroes = HEROES; // import进来后，赋值后才能使用！导进来的是一个类，自己实例化后才能使用。


  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';

@Component({      // @component是装饰器函数，为该组件执行angular所需要的元数据
  selector: 'app-heroes',  // 组件的选择器，css选择器，表明本组件的html元素名称是<app-heroes>，相当于<body>、<h1>之类的
  templateUrl: './heroes.component.html', // 组件模板文件位置
  styleUrls: ['./heroes.component.css']   // 组件私有css样式表文件位置
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero; // 一个属性hero，数据/对象类型是Hero类，并对这个Hero实例进行赋值/初始化

  heroes: Hero[]; // import进来后，赋值后才能使用！导进来的是一个类，自己实例化后才能使用。

  private heroService: HeroService;


  // 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
  // 构造函数即为依赖注入点
  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  ngOnInit() {
    this.getHeroes();  // 和python一样，只要是调用类实例的的方法或者变量都需要通过this，哪怕是在类的内部
  }

  onSelect(everyHero: Hero): void {
    this.selectedHero = everyHero;
  }

  // 本方法使用老的同步方法
  __getHeroes(): void {   //  职责分离，让service去获取数据，而不是前端的组件
    this.heroes = this.heroService.__getHeroes();
  }

  // 对老方法进行改进，使用observeable<>泛型包装传输的Hero[]对象,达到异步调用的目的
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(ObservableObjectWeGot => this.heroes = ObservableObjectWeGot);
    // subscribe()中使用了回调函数，也是lambda表达式
  }


}

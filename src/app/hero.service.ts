import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({  // 这个组件是可以注入的，也就是是一个服务
  providedIn: 'root'   // 表明可以被使用的范围
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Hero[] {   // 定一个函数，返回Hero类型的数组
    return HEROES;  // 返回一个常量数组
  }
}

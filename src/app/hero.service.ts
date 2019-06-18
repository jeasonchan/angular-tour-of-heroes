import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({  // 这个组件是可以注入的，也就是是一个服务；同理，组件也有类似的注解，这种注解内的属性及其赋值即为 元数据
  providedIn: 'root'   // 表明可以被使用的范围，此处的范围是 root 即为根目录范围
})

export class HeroService {

  constructor() {
  }


  // 通常，获取数据是异步行为，这个过程是需要等待的，因此，通过angular自带的的异步获取方法来获取远端的数据
  // 此处考虑使用HttpClient.get，该方法会返回Observable（可观察对象）
  __getHeroes(): Hero[] {   // 定义一个函数，返回Hero类型的数组
    return HEROES;  // 返回一个常量数组
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。

  }
}

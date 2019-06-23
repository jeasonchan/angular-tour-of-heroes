import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// 因为要使用 RouterModule 中的 Routes 类来配置路由器，
// 所以还要从 @angular/router 库中导入这两个符号。

import {HeroesComponent} from './heroes/heroes.component';



// 在这个模块中定义一个全局的、静态常量用于“路由”功能
// 功能主要通过Routes类的实例实现，
// 一个的实例的有两个常用属性，path和component
// 当 URL 为 localhost:4200/heroes 时，就导航到 HeroesComponent
// 定义这个常量主要是在RouterModule.forRoot(routeToHeroComponent)中使用
const routeToHeroComponent: Routes = [{path: 'heroes', component: HeroesComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routeToHeroComponent)], // 不需要引入AppModule
  exports: [RouterModule]
  // 导出 RouterModule 让路由器的相关指令可以在导入本模块的 AppModule 中的组件中使用。
  // 如果不显式导出，则其余模块使用时，还需要自己导入{Routes, RouterModule}，重要！！！！！
})
export class AppRoutingModule {
}

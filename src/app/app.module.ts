import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({  // 该module需要的module列表，由于该项目就是一个module，所以app.module.ts控制着整个app的模块导入
  declarations: [
    AppComponent,  // 每个组件都必须在自己属于的module中声明，使用命令行新建组件时，自动添加到此了
    HeroesComponent, HeroDetailComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

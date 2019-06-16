import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // 带有input属性，外部的heroComponet才能绑定到selected才能绑定到他

  constructor() {
  }

  ngOnInit() {
  }

  fuckYou() {
    console.log('2333');
  }

}

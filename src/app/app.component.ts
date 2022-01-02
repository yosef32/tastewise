import { Component, OnInit } from '@angular/core';
import { Model } from './model';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fetchURL';

  model: Model = {
    url: "",
    res: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  async fetch() {
    this.model.res = await (await axios.get(this.model.url)).data
  }
}

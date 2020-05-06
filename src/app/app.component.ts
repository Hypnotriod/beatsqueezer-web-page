import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.document.body.classList.remove('loading');
    // const loading: HTMLElement = window.document.getElementById('loading-main');
    // loading.parentNode.removeChild(loading);
  }
}

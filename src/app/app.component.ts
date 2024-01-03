import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nucleos-area-restrita';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2) { }

  ngOnInit(): void {
    this.render.addClass(this.document.body, 'mestraTheme');
  }
}

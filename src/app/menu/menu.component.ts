import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [ MessageService ]
})
export class MenuComponent {

  constructor(
    private messageService: MessageService,
  ){}


}

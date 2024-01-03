import { Component } from '@angular/core';

@Component({
  selector: 'app-politicamente-exposta',
  templateUrl: './politicamente-exposta.component.html',
  styleUrls: ['./politicamente-exposta.component.scss']
})
export class PoliticamenteExpostaComponent {
  ingredient!: string;
  confirma: boolean = false;
}

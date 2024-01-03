import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-documentos',
  templateUrl: './cadastro-documentos.component.html',
  styleUrls: ['./cadastro-documentos.component.scss']
})
export class CadastroDocumentosComponent {


  constructor(
    private router: Router,
    private builder: UntypedFormBuilder,
    private userService: UserService,
    private messageService: MessageService){
    this.formulario = this.builder.group({
      descDocumento: ['', Validators.required],
      dataRef: ['', Validators.required],
      arquivo: ['', Validators.required],
      perfilAtendimento: ['', Validators.required],
      perfilConseDeli: ['', Validators.required],
      perfilConseFiscal: ['', Validators.required],
      perfilDiretoria: ['', Validators.required],
      perfilComite: ['', Validators.required],
      perfilParticipante: ['', Validators.required]
    })
  }
  formulario!: UntypedFormGroup;
}

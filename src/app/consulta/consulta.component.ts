import { Component, Inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss',
})
export class ConsultaComponent implements OnInit {
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = [
    'id',
    'nome',
    'cpf',
    'dataNascimento',
    'email',
    'acoes',
  ];
  snack: MatSnackBar = Inject(MatSnackBar);

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  prepararEditar(id: string) {
    this.router.navigate(['/editar'], { queryParams: { id: id } });
  }

  prepararDeletar(cliente: Cliente) {
    cliente.deletando = true;
  }

  deletar(cliente: Cliente) {
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
    this.snack.open('Cliente deletado com sucesso!', 'Ok');
  }
}

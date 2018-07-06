import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { TipoPessoa } from '../tipo-pessoa';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: string = "Proprietário";
  contador: number = 0;
  imagem: string;
  pessoa: Pessoa;

  constructor(private svcCliente: ClienteService) { }

  ngOnInit() {

    if (this.pessoa == null) {
      this.pessoa = new Pessoa();
      this.pessoa.nomePessoa = "Beneton";
      this.pessoa.tipoPessoa = TipoPessoa.Juridica;
    }

    this.svcCliente.getClientes();

  }

  levantarNeymar() : void {
    this.imagem = "assets/neymar_em_pe.jpg";
  }

  


}

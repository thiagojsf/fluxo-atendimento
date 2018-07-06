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
  porcentagemProgresso: number = 0;
  imagem: string;
  pessoa: Pessoa;
  pessoas: Pessoa[];

  constructor(private svcCliente: ClienteService) { }

  ngOnInit() {

    if (this.pessoa == null) {
      this.pessoa = new Pessoa();
      this.pessoa.nomePessoa = "Beneton";
      this.pessoa.tipoPessoa = TipoPessoa.Juridica;
    }
    let servicoClientes = this.svcCliente.getClientes();

    this.porcentagemProgresso = 50;

    servicoClientes.subscribe( res => {
      this.porcentagemProgresso = 99;
      this.pessoas = res;
      this.porcentagemProgresso = 100;

      if (this.pessoas == null) {
        this.pessoas = [];
      }

    });

  }

  adicionarCliente() {

    let pessoa : Pessoa = {
      nomePessoa : "Neymar",
      tipoPessoa : TipoPessoa.Juridica
    }

    this.pessoas.push(pessoa);

    this.svcCliente.addCliente(pessoa).subscribe(res => {
      console.log(res);
    });

  }

}

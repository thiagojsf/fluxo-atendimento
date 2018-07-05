import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TipoPessoa } from '../tipo-pessoa';


@Component({
  selector: 'app-tipo-pessoa',
  templateUrl: './tipo-pessoa.component.html',
  styleUrls: ['./tipo-pessoa.component.css']
})
export class TipoPessoaComponent implements OnInit {

  @Input() tipoPessoa: TipoPessoa;
  @Output() tipoPessoaChange: EventEmitter<TipoPessoa> = new EventEmitter<TipoPessoa>();

  constructor() { }

  ngOnInit() {
  }

  alterarValor(tipoSelecionado: TipoPessoa) {
    this.tipoPessoaChange.emit(tipoSelecionado);
  }

}

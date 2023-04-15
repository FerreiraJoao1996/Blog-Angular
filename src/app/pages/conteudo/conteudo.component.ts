import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  fotoLink:string = ''
  conteudoTitulo:string = ''
  conteudoDescricao:string = ''
  private id:string | null = ''

  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id'))

      this.valoresDoComponente(this.id)
  }

  valoresDoComponente(id:string | null){
    const resultado = data.filter(artigo => artigo.id.toString() == id)[0]

    this.conteudoTitulo = resultado.titulo
    this.conteudoDescricao = resultado.descricao
    this.fotoLink = resultado.foto
  }

}

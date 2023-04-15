import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  linkFoto:string = ''
  @Input()
  smallTitulo:string = ''
  @Input()
  smallDescricao:string = ''
  @Input()
  Id:string= '0'


}

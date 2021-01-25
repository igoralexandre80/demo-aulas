import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-um',
  templateUrl: './componente-um.component.html',
  styleUrls: ['./componente-um.component.css']
})
export class ComponenteUmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Iniciou');
    this.funcao();
  }
  // tslint:disable-next-line:typedef
  funcao() {
    const variavel = 0;
    const letras = 'Agora Vaiiiiiiiiiiiiii';
    console.log('teste');
    console.log(variavel);
    console.log(letras);
  }

}

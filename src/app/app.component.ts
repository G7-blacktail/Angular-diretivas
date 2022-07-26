import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  nome = 'Gustavo Fernandes de Freitas'
  
  text!: string;
  count = 0;
  pessoas = [
    {
      nome: "Gustavo",
      sobrenome: "Fernandes"
    }, 
    {
      nome: "Roberta",
      sobrenome: "Magalhães"
    }, 
    {
      nome: "Genisvaldo",
      sobrenome: "Silva"
    },
    {
      nome: "Ronaldo",
      sobrenome: "Soares"
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
      let interval = setInterval(() => {
        this.count++;
          if(this.count === 10) {
            clearInterval(interval);
          }
      }, 1000)
  }

  clicou(nome: string): void{
    console.log('clicou em mim', nome)
  }

}

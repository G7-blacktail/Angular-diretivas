import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/peopleservice';


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
      firstName : '',
      lastName : '',
      age : 0
    }
  ];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit(): void {
      let interval = setInterval(() => {
        this.count++;
          if(this.count === 10) {
            clearInterval(interval);
          }
      }, 1000)
      this.getPeople();
  }

  clicou(nome: string): void{
    console.log('clicou em mim', nome)
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    });
  }

}

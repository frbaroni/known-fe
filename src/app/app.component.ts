import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knwn-fe';
  estabelecimentos = [
    { nome: 'Fazendinha', classe: 'A+' },
    { nome: 'Michele (Itapetininga)', classe: 'B' },
  ];
}

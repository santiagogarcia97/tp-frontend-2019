import { Component, OnInit } from '@angular/core';
import {JugadorModel} from '../../../../core/models';
import {JugadoresService} from '../../../../core/services';


@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css']
})
export class JugadoresListComponent implements OnInit {

  result: {message: string; data: [JugadorModel]; error: string; };

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadoresService.getAll()
      .subscribe( result => this.result = result );
  }

  searchJugadores(searchTerm: string) {
    this.jugadoresService.search(searchTerm)
      .subscribe(result => this.result = result);
  }
}

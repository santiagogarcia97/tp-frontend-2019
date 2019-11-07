import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {EstadioModel} from '../../../../core';
import {EstadiosService} from '../../../../core';

@Component({
  selector: 'app-estadios-list',
  templateUrl: './estadios-list.component.html',
  styleUrls: ['./estadios-list.component.css']
})
export class EstadiosListComponent implements OnInit {

  apiUrl = environment.apiUrl;

  result: {message: string; data: [EstadioModel]; error: string; };

  constructor(private EstadiosServ: EstadiosService) { }

  ngOnInit() {

    this.EstadiosServ.getAll()
        .subscribe( result => this.result = result );
  }

}

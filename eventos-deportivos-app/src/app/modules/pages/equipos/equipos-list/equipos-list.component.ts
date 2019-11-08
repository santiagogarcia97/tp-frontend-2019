import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {EquiposService} from '../../../../core/services';
import {EquipoModel} from '../../../../core/models';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  apiUrl = environment.apiUrl;

  result: {message: string; data: [EquipoModel]; error: string; };

  constructor(private equiposService: EquiposService) { }

  ngOnInit() {

    this.equiposService.getAll()
      .subscribe( result => this.result = result );
  }

}

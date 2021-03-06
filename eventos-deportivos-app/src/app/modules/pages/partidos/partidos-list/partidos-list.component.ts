import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {PartidoModel} from '../../../../core/models';
import {PartidosService} from '../../../../core/services';

@Component({
  selector: 'app-partidos-list',
  templateUrl: './partidos-list.component.html',
  styleUrls: ['./partidos-list.component.css']
})
export class PartidosListComponent implements OnInit {

  apiUrl = environment.apiUrl;

  resultFinalizados: {message: string; data: [PartidoModel]; error: string; };
  resultProximos: {message: string; data: [PartidoModel]; error: string; };

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {
    this.partidosService.getFinalizados()
      .subscribe( result => this.resultFinalizados = result );
    this.partidosService.getProximos()
      .subscribe( result => this.resultProximos = result );
  }

}

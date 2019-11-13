import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {EventoModel, PartidoModel} from '../../../../core/models';
import {PartidosService} from '../../../../core/services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-partidos-detail',
  templateUrl: './partidos-detail.component.html',
  styleUrls: ['./partidos-detail.component.css']
})
export class PartidosDetailComponent implements OnInit {

  apiUrl = environment.apiUrl;
  resultPartido: {message: string; data: PartidoModel; error: string; };
  resultEventos: {message: string; data: [EventoModel]; error: string; };

  constructor(private partidoService: PartidosService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.partidoService.getById(this.route.snapshot.paramMap.get('id'))
      .subscribe( result => this.resultPartido = result );

    this.partidoService.getEventos(this.route.snapshot.paramMap.get('id'))
      .subscribe( result => this.resultEventos = result );
  }

}

import { Component, OnInit } from '@angular/core';
import {EquiposService} from '../../../../core/services';
import {EquipoModel, JugadorModel} from '../../../../core/models';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-equipos-detail',
  templateUrl: './equipos-detail.component.html',
  styleUrls: ['./equipos-detail.component.css']
})
export class EquiposDetailComponent implements OnInit {

  apiUrl = environment.apiUrl;
  resultEquipo: {message: string; data: EquipoModel; error: string; };
  resultJugadores: {message: string; data: [JugadorModel]; error: string; };

  constructor(private equiposService: EquiposService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.equiposService.getById(this.route.snapshot.paramMap.get('id'))
      .subscribe( result => this.resultEquipo = result );

    this.equiposService.getJugadores(this.route.snapshot.paramMap.get('id'))
      .subscribe( result => this.resultJugadores = result );
  }
  public calcularEdad(fechaNac: Date): number {
      const timeDiff = Math.abs(Date.now() - new Date(fechaNac).getTime());
      return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

}

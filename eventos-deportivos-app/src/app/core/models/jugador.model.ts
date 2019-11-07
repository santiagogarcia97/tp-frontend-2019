import {EquipoModel} from './equipo.model';

export interface JugadorModel {
  nombre: string;
  fechaNac: Date;
  equipo: EquipoModel;
  goles: number;
}

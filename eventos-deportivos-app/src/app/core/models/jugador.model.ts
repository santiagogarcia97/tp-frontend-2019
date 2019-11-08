import {EquipoModel} from './equipo.model';

export interface JugadorModel {
  _id: string;
  nombre: string;
  fechaNac: Date;
  equipo: EquipoModel;
  goles: number;
}

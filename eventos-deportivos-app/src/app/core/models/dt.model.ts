import {EquipoModel} from './equipo.model';

export interface DtModel {
  _id: string;
  nombre: string;
  fechaNac: Date;
  equipo: EquipoModel;
}

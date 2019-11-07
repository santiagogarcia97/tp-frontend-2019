import {EquipoModel} from './equipo.model';

export interface DtModel {
  nombre: string;
  fechaNac: Date;
  equipo: EquipoModel;
}

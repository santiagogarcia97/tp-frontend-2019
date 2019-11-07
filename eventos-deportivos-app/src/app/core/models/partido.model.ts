import {EquipoModel} from './equipo.model';
import {EventoModel} from './evento.model';
import {EstadioModel} from './estadio.model';

export interface PartidoModel {
  fechaHora: Date;
  local: EquipoModel;
  visitante: EquipoModel;
  eventos: [EventoModel];
  estadio: EstadioModel;
}

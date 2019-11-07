import {TipoEventoModel} from './tipo-evento.model';
import {EquipoModel} from './equipo.model';
import {JugadorModel} from './jugador.model';
import {PartidoModel} from './partido.model';

export interface EventoModel {
  partido: PartidoModel;
  tipo: TipoEventoModel;
  equipo: EquipoModel;
  jugador: JugadorModel;
  fechaHora: Date;
}

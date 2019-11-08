import {TipoEventoModel} from './tipo-evento.model';
import {EquipoModel} from './equipo.model';
import {JugadorModel} from './jugador.model';
import {PartidoModel} from './partido.model';

export interface EventoModel {
  _id: string;
  partido: PartidoModel;
  tipo: TipoEventoModel;
  equipo: EquipoModel;
  jugador: JugadorModel;
  fechaHora: Date;
}

import {JugadorModel} from './jugador.model';
import {DtModel} from './dt.model';

export interface EquipoModel {
  _id: string;
  nombre: string;
  jugadores: [JugadorModel];
  dt: DtModel;
  escudo: string;
}

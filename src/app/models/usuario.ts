import { Perfil } from './ePerfil';

export interface Usuario {
  mail?: string;
  nombre?: string;
  clave?: string;
  perfil?: Perfil;
}

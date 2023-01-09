import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PersonaUsuario} from "../models/personaUsuario";
import {Observable} from "rxjs";
import {FormControl, ɵFormGroupRawValue, ɵTypedOrUntyped} from "@angular/forms";
import { environment } from 'src/environments/environment';
import {Estudiante} from "../models/estudiante";

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {


  constructor(private http: HttpClient) {
  }

  loginUsuario(persona: ɵTypedOrUntyped<{ clave: FormControl<String | null>; cedula: FormControl<String | null> }, ɵFormGroupRawValue<{ clave: FormControl<String | null>; cedula: FormControl<String | null> }>, any>): Observable<PersonaUsuario> {
    console.log(persona)
    return this.http.post<PersonaUsuario>(environment.URL_APP + "/persona/login", persona)
  }

  loginUsuarioEmail(estudiante: ɵTypedOrUntyped<{ contra: FormControl<String | null>; email: FormControl<String | null> }, ɵFormGroupRawValue<{ contra: FormControl<String | null>; email: FormControl<String | null> }>, any>): Observable<Estudiante> {
    console.log(estudiante)
    return this.http.post<Estudiante>(environment.URL_APP + "/persona/loginemail", estudiante)
  }



}

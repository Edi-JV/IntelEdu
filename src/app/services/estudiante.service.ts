import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {Estudiante} from "../models/estudiante";
import {environment} from "../../environments/environment";
import {Curso} from "../models/curso";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {
  }

  obtAll():Observable<Estudiante[]>{
    return this.http.get(environment.URL_APP + "/estudiantes/all", {headers: this.httpHeaders}).pipe(map(Response => Response as Estudiante[]))

  }

}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InicioSesionService} from "../../../services/inicioSesion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit,AfterViewInit {

  hide = true;
  iniciobar:boolean;
  issloading=true;

  constructor(private inicioSesionService:InicioSesionService,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.guardarinfo();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.issloading=false;
    },20000)



  }

  formGroup = new FormGroup({
    contra: new FormControl<String>('', [Validators.required]),
    email: new FormControl<String>('', [Validators.required])
  })


  iniciarsesion(){
    this.iniciobar=true
    this.inicioSesionService.loginUsuarioEmail(this.formGroup.getRawValue()).subscribe(value => {
      console.log(value);
      console.log(value.token)
      this._snackBar.open('SESION INICIADA', 'ACEPTAR');
      sessionStorage.clear()
      sessionStorage.setItem('personausuario', JSON.stringify(value));
      this.router.navigate(['/panel/biblioteca/bienvenida']);
      this.iniciobar=false

    },error => {
      this._snackBar.open(error.error.message+' USUARIO O CLAVE INVALIDAD', 'ACEPTAR');
      this.iniciobar=false
    })

  }

  guardarinfo(){

    console.log(document.getElementById("botonestudiante").innerText);
    console.log("hola como estas");

  }


}

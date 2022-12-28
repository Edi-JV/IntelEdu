import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registroprofesor',
  templateUrl: './registroprofesor.component.html',
  styleUrls: ['./registroprofesor.component.css']
})
export class RegistroprofesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formGroup = new FormGroup({
    clave: new FormControl<String>('', [Validators.required]),
    cedula: new FormControl<String>('', [Validators.required])
  })

}

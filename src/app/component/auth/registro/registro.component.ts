import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formGroup = new FormGroup({
    clave: new FormControl<String>('', [Validators.required]),
    cedula: new FormControl<String>('', [Validators.required])
  })


}

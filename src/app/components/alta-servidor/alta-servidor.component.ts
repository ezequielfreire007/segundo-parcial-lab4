import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Servidor } from '../../models/servidor';

@Component({
  selector: 'app-alta-servidor',
  templateUrl: './alta-servidor.component.html',
  styleUrls: ['./alta-servidor.component.scss']
})
export class AltaServidorComponent implements OnInit {

  miServidor: Servidor;
  nombreDelSitio: FormControl;
  espacio: FormControl;
  altaServidorForm: FormGroup;

  constructor( private builder: FormBuilder) {
    this.miServidor = {};
  }

  ngOnInit() {
    this.nombreDelSitio = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);

    this.espacio = new FormControl('', [
      Validators.required
    ]);

    this.altaServidorForm = this.builder.group({
      nombreDelSitio: this.nombreDelSitio,
      espacio: this.espacio
    });
  }



  subirServidor() {
    console.log(this.miServidor);
  }

}

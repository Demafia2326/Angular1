import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores:any;
  proveedor:any;

  mensaje:string;
  constructor(private proveedoresService: ProveedoresService) {
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: null,
      email: '',
      contacto: ''
    }
  }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores();  }

}

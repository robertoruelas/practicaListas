import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../services/buscar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  listaCanciones: any;
  respuesta: any;
  constructor(private serv: BuscarService) {
    this.getData();
  }

  async getData() {
    const valores = {
      tipoMov: 'getData2'
    };

    this.respuesta = await this.serv.postData(valores);
    this.listaCanciones = this.respuesta.result;

    console.log(this.respuesta);
  }

  async unread(id: string) {
    console.log(id);
  }
}

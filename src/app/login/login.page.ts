import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../services/buscar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginUser = {
    username: 'prueba',
    password: '123',
    tipoMov: 'login'
  };

  DatosUsuarios: any;
  constructor(private serv: BuscarService) {}

  ngOnInit() {}

  async login(fLogin: NgForm) {
    /* console.log(fLogin.valid); */
    if (fLogin.invalid) {
      return;
    }

    this.DatosUsuarios = await this.serv.postData(this.loginUser);
    console.log(this.DatosUsuarios);

    if (this.DatosUsuarios.success) {
    } else {
    }
  }
}

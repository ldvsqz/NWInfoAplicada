import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css']
})
export class UsuarioAdminComponent implements OnInit {
  user: Usuario = {
    idUser: 0,
    Usuario: '',
    Nombre: '',
    pass: '',
    idPuesto: 0,
  };
  users: Usuario[] = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
      const userJson = localStorage.getItem('usuario');
      if (userJson !== null) {
        this.user = JSON.parse(userJson);
      }else{
        this.exit();
      }
      console.log(this.user);
  }

  lista(){
    this.api.lista().subscribe(
        (res:any) => {
            this.users = res;
            console.log(this.users)
        });
  }


  exit() {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }


  modal(){
    alert('esto es un modal');
  }
}

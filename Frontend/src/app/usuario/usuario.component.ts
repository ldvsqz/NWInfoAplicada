import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user: Usuario = {
    idUser: 0,
    Usuario: '',
    Nombre: '',
    pass: '',
    idPuesto: 0,
  };

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('usuario');
      if (userJson !== null) {
        this.user = JSON.parse(userJson);
      }else{
        this.exit();
      }
      console.log(this.user);
  }

  sesion(us: Usuario | null) {
    //localStorage.setItem('usuario', JSON.stringify(us));
    if (us === null) {
      this.router.navigateByUrl('/login');
    } 
  }


  exit() {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }


  modal(){
    alert('esto es un modal');
  }
}

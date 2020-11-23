import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ApiService } from '../api/api.service';
import { Usuario } from '../models/usuario';
import * as CryptoJS from 'crypto-js';



@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public user: Usuario = {
        idUser: 0,
        Usuario: '',
        Nombre: '',
        pass: '',
        idPuesto: 0,
    };
    

 constructor(private api: ApiService, private router: Router){}
    ngOnInit(): void {
      if (this.user == undefined) {
        const userjson = localStorage.getItem('usuario');
        if (userjson !== null) {
          this.user = JSON.parse(userjson);
          this.rango(this.user);
        }
      }
    }

    login(){
        //console.log(this.usuario);
        //this.user.pass = btoa(this.user.pass); //Funcion para encriptar en base64.
        this.api.login(this.user).subscribe(
            (res:any) => {
                if(res !=  '' || res != null){
                    //this.router.navigate([`/usuario/${res[0].Nombre}`]);
                    this.user = res[0];
                    console.log(this.user);
                    this.rango(this.user);
                }else{
                    console.log('campo nulo, respuesta vacia');
                }
            });
    }
    rango(us: Usuario) {
      
      //console.log(this.user);
        localStorage.setItem('usuario', JSON.stringify(us));
        try {
          if (this.user.idPuesto == 1) {
            this.router.navigateByUrl('/usuario-admin');
          } else if(this.user.idPuesto == 2 || this.user.idPuesto == 3){
            this.router.navigateByUrl('/usuario');
          }else{
            //alert('Error al iniciar sesión');
          }
        } catch (error) {
          console.log(error);
        }
      }
    


    
    
}
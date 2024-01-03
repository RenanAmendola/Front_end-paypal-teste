import { Component, OnInit } from '@angular/core';
import { Adress } from '../model/Adress';
import { User } from '../model/User';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-adress',
  templateUrl: './edit-adress.component.html',
  styleUrl: './edit-adress.component.css'
})
export class EditAdressComponent implements OnInit{

  adress: Adress = new Adress

  user : User = new User()
  userId = environment.user_id 




  constructor(

    private auth: AuthService,
    private router: Router

  ){}

  ngOnInit() {
    window.scroll(0,0) 

    this.adress.id = environment.Adress_id
    this.adress.adress_1 = environment.adress_1
    this.adress.adress_2 = environment.adress_2
    this.adress.country = environment.country
    this.adress.state = environment.state
    this.adress.province = environment.province
    this.adress.postal_code = environment.postal_code
    

  }


  update_adress(){

    this.user.id = this.userId
    this.adress.user = this.user

    this.auth.update_adress(this.adress).subscribe((resp: Adress) => {
      this.adress = resp
      alert("Adress updated!")
      this.adress = new Adress()
      this.router.navigate(['/home'])


      
    })




    /*   
    this.user.id = this.idUser
    this.noticias.usuario = this.user

    this.noticiasService.postNoticias(this.noticias).subscribe((resp: noticias) => {
      this.noticias = resp
      this.alerta.showAlertSuccess('Noticia postada com sucesso!')
      this.noticias = new noticias()
      this.router.navigate(['/home'])
      */
  }

}

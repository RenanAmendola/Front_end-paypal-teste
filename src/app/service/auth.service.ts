import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { Product } from '../model/Product';
import { Adress } from '../model/Adress';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://backend-paypal-teste-production.up.railway.app/User/Login', userLogin)
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('https://backend-paypal-teste-production.up.railway.app/User/Sing_up', user)
  }

  add_adress(adress: Adress): Observable<Adress>{
    return this.http.post<Adress>(`https://backend-paypal-teste-production.up.railway.app/Adress`, adress)
  }

  get_all_products(): Observable<Product[]>{
    return this.http.get<Product[]>('https://backend-paypal-teste-production.up.railway.app/Products/')
  }

  create_product(product: Product): Observable<Product>{
    return this.http.post<Product>('https://backend-paypal-teste-production.up.railway.app/Products', product)
  }

  get_product_id(id: Number): Observable<Product>{
    return this.http.get<Product>(`https://backend-paypal-teste-production.up.railway.app/Products/${id}`)
  }

  get_adress_by_user(id: Number): Observable<Adress>{
    return this.http.get<Adress>(`https://backend-paypal-teste-production.up.railway.app/Adress/user/${id}`)
  }



}

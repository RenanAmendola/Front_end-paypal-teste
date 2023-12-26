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
    return this.http.post<UserLogin>('http://localhost:8080/User/Login', userLogin)
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/User/Sing_up', user)
  }

  add_adress(adress: Adress): Observable<Adress>{
    return this.http.post<Adress>(`http://localhost:8080/Adress`, adress)
  }

  get_all_products(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/Products/')
  }

  create_product(product: Product): Observable<Product>{
    return this.http.post<Product>('http://localhost:8080/Products', product)
  }

  get_product_id(id: Number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/Products/${id}`)
  }

  get_adress_by_user(id: Number): Observable<Adress>{
    return this.http.get<Adress>(`http://localhost:8080/Adress/user/${id}`)
  }



}

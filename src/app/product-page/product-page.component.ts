import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{

  product: Product = new Product()

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.get_product_id(id)
  }

  get_product_id(id: number){
    this.auth.get_product_id(id).subscribe((resp: Product) => {
      this.product = resp
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Product } from '../model/Product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  product : Product = new Product

  constructor(

    private auth: AuthService,
    private router: Router

  ){}

  ngOnInit() {}

    add_product(){

      this.auth.create_product(this.product).subscribe((resp: Product) => {
        this.product = resp
        this.router.navigate(['/home'])
        alert("Product created successfully!")
      })

    }

}

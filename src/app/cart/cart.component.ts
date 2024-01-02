import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/Product';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../model/UserLogin';
import { environment } from '../../environments/environment.prod';
import { Adress } from '../model/Adress';
import { ICreateOrderRequest, IPayPalConfig, ITransactionItem } from 'ngx-paypal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;

  userLog: UserLogin = new UserLogin
  product: Product = new Product()
  adress: Adress = new Adress

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
    this.initConfig();
    let id = this.route.snapshot.params['id']
    this.get_product_id(id)

    this.userLog.id = environment.user_id
    this.userLog.name = environment.user_name
    this.userLog.last_name = environment.user_last_name
    this.userLog.email = environment.user_email
    this.userLog.phone = environment.user_phone

    this.adress.id = environment.Adress_id
    this.adress.adress_1 = environment.adress_1
    this.adress.adress_2 = environment.adress_2
    this.adress.country = environment.country
    this.adress.state = environment.state
    this.adress.province = environment.province
    this.adress.postal_code = environment.postal_code
  }

  get_product_id(id: number) {
    this.auth.get_product_id(id).subscribe((resp: Product) => {
      this.product = resp
    })
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.product.price.toString(),
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.product.price.toString()
                }
              }
            },
            shipping: {
              address: {
                address_line_1: this.adress.adress_1,
                address_line_2: this.adress.adress_2,
                admin_area_2: this.adress.province,
                admin_area_1: this.adress.state,
                postal_code: this.adress.postal_code.toString(),
                country_code: "US",
              },
            },
            items: [
              {
                name: this.product.name,
                description: this.product.description,
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.product.price.toString(),
                },
              }
            ]
          }
        ],
        payer: {
          name: {
            "given_name": this.userLog.name,
            "surname": this.userLog.last_name
          },
          email_address: this.userLog.email,
          phone: {
            phone_type: 'MOBILE',  // Adicione esta linha se quiser incluir um número de telefone
            phone_number: {
              national_number: '5555555555',  // Substitua pelo número real
            },
          },
          address: {
            address_line_1: this.adress.adress_1,
            address_line_2: this.adress.adress_2,
            admin_area_2: this.adress.province,
            admin_area_1: this.adress.state,
            postal_code: this.adress.postal_code.toString(),
            country_code: this.adress.country,
          },
        },
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', 
        JSON.stringify(data))
        this.openModal(
          data.purchase_units[0].items
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }



    };

  }

  openModal(itens: ITransactionItem[]): void {
    const modalRef = this.modalService.open(ModalComponent)
    modalRef.componentInstance.itens = itens;

  }
  
  

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shhipping',
  templateUrl: './shhipping.component.html',
  styleUrls: ['./shhipping.component.css']
})
export class ShhippingComponent implements OnInit {
  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit( ): void{ 
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}

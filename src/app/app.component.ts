import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Ezgi Özgen"
  product = { productId: 1, productName: 'Bardak', categoryId: 2, unitPrice: 5 }
  product2 = { productId: 2, productName: 'laptop', categoryId: 1, unitPrice: 1115 }
  product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 65 }
  product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 55 }


  products = [this.product, this.product2, this.product3, this.product4]
}

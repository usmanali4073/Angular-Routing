import { Component, OnInit } from "@angular/core";

import { Product } from "./product";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor( private productService: ProductService, private router: ActivatedRoute ) {
    // this.product = this.router.snapshot.data['resolvedProduced']

    this.router.snapshot.data.subscribe(data => {
      const product: Product = data['resolvedProduced'];
      console.log(product);
      this.onProductRetrieved(product);
    })
  }

  ngOnInit(): void {
    // const id = this.router.snapshot.paramMap.get('id');
    // if (id != null) {
    //   this.getProduct(Number(id));
    // }
  }

  getProduct(id: number) {
    this.productService
      .getProduct(id)
      .subscribe(
        product => this.onProductRetrieved(product),
        error => (this.errorMessage = <any>error)
      );
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = "No product found";
    }
  }
}

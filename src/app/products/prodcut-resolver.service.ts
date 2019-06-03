import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ProductResolve implements Resolve<Product> {

 constructor( private productService: ProductService) {

 }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    const id =  route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a Number ${id}`;
      console.error(message);
      return null;
    }
    return this.productService.getProduct(+id);
  }
}


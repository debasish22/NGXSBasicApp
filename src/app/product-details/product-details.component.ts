import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'src/statemanagement/model/productmodel';
import { DeleteProduct } from 'src/statemanagement/action/product.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  deleteproduct(id) {

    // Deleting product from the Store
    this.store.dispatch(new DeleteProduct({ productId: id }));
  }
}

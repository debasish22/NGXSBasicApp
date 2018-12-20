import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from 'src/statemanagement/action/product.action';

@Component({
  selector: 'app-create-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class CreateProductComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  saveProduct(id, name, description) {

    // Adding Data to store
    this.store.dispatch(new AddProduct(
      {
        id: id,
        name: name,
        description: description
      }
    ));
  }
}

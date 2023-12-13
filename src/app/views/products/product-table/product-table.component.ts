import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/ts/interfaces/product';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
@Input() products :Product[] =[]
@Output() deleteProd = new EventEmitter<string>()
@Output() updateProd = new EventEmitter<any>()

deleteProduct(id : string ){
   this.deleteProd.emit(id)
}
updateProduct(product :Product ){ 
  this.updateProd.emit(product)
}

}

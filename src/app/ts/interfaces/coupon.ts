import { Product } from "./product";

 
export interface Coupon {
    _id? :any ;
    name?:string ; 
    expiry?:Date; 
    discount?:number ;
    product : Product[]
}
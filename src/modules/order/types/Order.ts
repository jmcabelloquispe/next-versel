import {OrderDetail} from './OrderDetail';

export type Order = {
  orderId: string;
  subTotal: string;
  totalDiscount: string;
  totalShipping: string;
  total: string;
  orderGroup: string;
  statusOrderDescription: string;
  creationDate: string;
  deliveryType: string;
  address: string;
  orders: Order[];
  details: OrderDetail[];
};
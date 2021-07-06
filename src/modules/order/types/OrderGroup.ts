import { Order } from "./Order";
import { OrderDetail } from "./OrderDetail";

export type OrderGroup = {
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
  seller: string;
  statusOrder: string;
  groupTotal: string;
};
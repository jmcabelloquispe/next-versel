
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './OrderHeader.module.scss';
import { Order } from '../../types/Order';
import Moment from 'moment';


const useStyles = makeStyles({
  table: { 
    minWidth: 650,
  },
}); 

type Props = { 
  orders: Order[],
  tenant: string
}

const OrderHeader = ({orders, tenant}: Props) => {
  const classes = useStyles();
  return (
  <TableContainer component={Paper} className={styles.table__tablecita}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
            <TableCell>num. pedido</TableCell>
            <TableCell>estado</TableCell>
            <TableCell>tipo de entrega</TableCell>
            <TableCell>fec. creacion</TableCell>
            <TableCell>sub. total</TableCell>
            <TableCell>dcto. total</TableCell>
            <TableCell>flete</TableCell>
            <TableCell>total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order, index) => (
            <TableRow key={order.orderId}>
              <TableCell><a href={"/order/" + tenant + "/" + order.orderGroup}>{order.orderId}</a></TableCell>
              <TableCell>{order.statusOrderDescription}</TableCell>
              <TableCell>{order.deliveryType}</TableCell>
              <TableCell>{Moment(order.creationDate).calendar()}</TableCell>
              <TableCell>{order.subTotal}</TableCell>
              <TableCell>{order.totalDiscount}</TableCell>
              <TableCell>{order.totalShipping}</TableCell>
              <TableCell>{order.total}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default OrderHeader


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './OrderTable.module.scss';
import { Order } from '../../types/Order';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type Props = {
  order: Order
}

const OrderTable = ({order}: Props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>num. pedido</TableCell>
            <TableCell>dir. entrega</TableCell>
            <TableCell>sub. total</TableCell>
            <TableCell>dcto. total</TableCell>
            <TableCell>flete</TableCell>
            <TableCell>total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{order.orderId}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.subTotal}</TableCell>
            <TableCell>{order.totalDiscount}</TableCell>
            <TableCell>{order.totalShipping}</TableCell>
            <TableCell>{order.total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrderTable


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './OrderDetailTable.module.scss';
import Moment from 'moment';
import { OrderDetail } from '../../types/OrderDetail';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type Props = {
  orderDetail : OrderDetail[];
}

const OrderDetailTable = ({orderDetail}: Props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={styles.table__tablecita} >
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>sku</TableCell>
            <TableCell>producto</TableCell>
            <TableCell>imagen</TableCell>
            <TableCell>cantidad</TableCell>
            <TableCell>cant. cancelada</TableCell>
            <TableCell>und. medida</TableCell>
            <TableCell>precio</TableCell>
            <TableCell>descuento</TableCell>
            <TableCell>vendedor</TableCell>
            <TableCell>estado</TableCell>
            <TableCell>fec. entrega</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderDetail.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.skuCode}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <img src={row.imageUrl}></img>
              </TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.cancelled}</TableCell>
              <TableCell>{row.measurementUnit}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.productDiscount}</TableCell>
              <TableCell>{row.seller}</TableCell>
              <TableCell>{row.currentStateDescription}</TableCell>
              <TableCell>{Moment(row.deliveryDate).calendar()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default OrderDetailTable

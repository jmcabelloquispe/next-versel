import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import OrderTable from '../../order/components/OrderTable/OrderTable';
// import OrderDetailTable from '../../order/components/OrderDetailTable/OrderDetailTable';
import axios from 'axios';
import React, { useState } from 'react';
import { Order } from '../../order/types/Order';
import { GetStaticProps } from 'next';
import Error from 'next/error'
import handlePromise from '../../../common/utils/handlePromise';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: "5px"
  },
});

const OrderDetailTable = ({orderGroup, tenant}) => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(async () => {
    await fetch(`https://api-order-prd.cc.cloudintercorpretail.pe/${tenant}/orders/${orderGroup}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.orders[0].details);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // return (
    //   <ul>
    //     {items.map(item => (
    //       <li key={item.sellerSku}>
    //         {item.sellerSku} {item.sellerSku}
    //       </li>
    //     ))}
    //   </ul>
    // );
    return (
      <TableContainer component={Paper} >
        <Table className={classes.table} size="small" padding="none" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sku</TableCell>
              <TableCell>Nombre de Producto</TableCell>
              <TableCell>Origen</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Und. Medida</TableCell>
              <TableCell>Cant.</TableCell>
              <TableCell>Cant. Pick</TableCell>
              <TableCell>Fecha entrega</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Descuento</TableCell>
              <TableCell>Total</TableCell>
              {/* <TableCell>Motivo Anulacion</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.skuCode}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{row.currentStateDescription}</TableCell>
                <TableCell>{row.measurementUnit}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.amountPick}</TableCell>
                <TableCell>{Moment(row.deliveryDate).calendar()}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.productDiscount}</TableCell>
                <TableCell>{row.sellingPrice}</TableCell>
                {/* <TableCell>{row.cancelReasonSubType}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default OrderDetailTable;
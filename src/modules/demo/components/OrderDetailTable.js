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

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//       paddingTop: 30,
//     },
//     container: {
//       padding: '13px',
//       paddingTop: '20px',
//       background: '#ffffff',
//       marginTop: '21px'
//     },
//   }),
// );

// type Props = {
//   order: Order,
//   error: any
// }

const OrderDetailTable = ({orderGroup, tenant}) => {
  // const classes = useStyles();
 

  // const registerUser = async () => {
  //   const [error, order] = await handlePromise(axios.get(`https://api-order-prd.cc.cloudintercorpretail.pe/pvea/orders/v4754625plzv`)
  //   .then(res => res.data))
  //   return [error]
  // }

  // if (error) {
  //   return <Error statusCode={error} />
  // }
  // return (
  //   <div className={classes.container}>
  //     <Box>
  //       {order.orders.map((order, index) => (
  //         <React.Fragment key={index}>
  //           <p>{order}</p>
  //         </React.Fragment>
  //       ))}
  //     </Box>        
  //   </div>
  // );
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
          setItems(result.orders);
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
    return (
      <ul>
        {items.map(item => (
          <li key={item.orderId}>
            {item.orderId} {item.orderId}
          </li>
        ))}
        {/* {items.orders.map((order, index) => (
          order.orderId
        ))} */}
        {/* {items[0]} */}
      </ul>
    );
  }
}

export default OrderDetailTable;
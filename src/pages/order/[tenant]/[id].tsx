import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import OrderTable from '../../../modules/order/components/OrderTable/OrderTable';
import OrderDetailTable from '../../../modules/order/components/OrderDetailTable/OrderDetailTable';
import axios from 'axios';
import React from 'react';
import { Order } from '../../../modules/order/types/Order';
import { GetServerSideProps } from 'next';
import Error from 'next/error'
import handlePromise from '../../../common/utils/handlePromise';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 30,
    },
    container: {
      padding: '13px',
      paddingTop: '20px',
      background: '#ffffff',
      marginTop: '21px'
    },
  }),
);

type Props = {
  order: Order,
  error: any
}

const BasicTable = ({order, error}: Props) => {
  const classes = useStyles();
  if (error) {
    return <Error statusCode={error} />
  }
  return (
    <div className={classes.container}>
      <Box>
        {order.orders.map((order, index) => (
          <React.Fragment key={index}>
            <OrderTable order={order} />
            <OrderDetailTable orderDetail={order.details} />
          </React.Fragment>
        ))}
      </Box>        
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const [error, order] = await handlePromise(axios.get(`https://api-order-prd.cc.cloudintercorpretail.pe/${params?.tenant}/orders/${params?.id}`)
                          .then(res => res.data))
  return {
    props: {order, error}
  }
}

export default BasicTable;
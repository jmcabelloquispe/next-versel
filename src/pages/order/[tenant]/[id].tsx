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


type Props = {
  order: Order,
  error: any
}

const BasicTable = ({order, error}: Props) => {
  if (error) {
    return <Error statusCode={error} />
  }
  return (
    <Container maxWidth="lg">
      <Box>
        {order.orders.map((order, index) => (
          <React.Fragment key={index}>
            <OrderTable order={order} />
            <OrderDetailTable orderDetail={order.details} />
          </React.Fragment>
        ))}
      </Box>        
    </Container>
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
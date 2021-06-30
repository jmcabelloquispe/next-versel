import axios from 'axios';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import OrderHeader from '../../../modules/order/components/OrderHeader/OrderHeader';
import { GetServerSideProps } from 'next'
import { Order } from '../../../modules/order/types/Order';
import Error from 'next/error';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import handlePromise from '../../../common/utils/handlePromise';
import React from 'react';
import OrderForm from '../../../modules/order/components/OrderForm/OrderForm';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 30,
    },
    container: {
      padding: '13px',
      paddingTop: '10px',
      background: '#ffffff',
      marginTop: '21px'
    },
  }),
);

const ErrorFallback = ({error} : FallbackProps) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    )
}

type Props = {
    orders: Order[],
    tenant: string,
    errorCode: any
}

// function Bomb() {
//     throw new Error('💥 CABOOM 💥')
// }

const OrdersLists = ({orders, errorCode, tenant}: Props) => {
    const classes = useStyles();
    if (errorCode) {
        return <Error statusCode={errorCode} />
    }
    return (
        <div className={classes.container}>
            <div>
                <OrderForm />
            </div>
            <Box>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <OrderHeader orders={orders} tenant={tenant}/>
                </ErrorBoundary>
            </Box>  
        </div>
    );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {email, dateFrom, dateTo} = context.query
    const tenant = context.params?.tenant;
    const [errorCode, orders] = await handlePromise(axios.post(`https://api-order-prd.cc.cloudintercorpretail.pe/${tenant}/orders`, 
    {email, dateFrom, dateTo}).then(res => res.data))
    return {
      props: {orders, errorCode, tenant}
    }
}

export default OrdersLists

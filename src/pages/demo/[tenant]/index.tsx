import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import FormContainer from '../../../modules/demo/components/FormContainer'
import FilterForm from '../../../modules/demo/components/FilterForm'
import ActionAccordion from '../../../modules/demo/components/ActionAccordion'
import { GetServerSideProps } from 'next'
import { Order } from '../../../modules/order/types/Order'
import handlePromise from '../../../common/utils/handlePromise'
import axios from 'axios';

type Props = {
  orders: Order[],
  tenant: string,
  errorCode: any
}

const index = ({orders, errorCode, tenant}: Props) => {
  return (
    <div>
      <Container maxWidth="lg">
        <br/>
        <FormContainer>
          <FilterForm/>
        </FormContainer>
        <br/>
        <ActionAccordion orders={orders} tenant={tenant}/>
      </Container>
    </div>
  )
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

export default index
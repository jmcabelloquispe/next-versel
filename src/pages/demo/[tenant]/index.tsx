import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import FormContainer from '../../../modules/demo/components/FormContainer'
import FilterForm from '../../../modules/demo/components/FilterForm'
import ActionAccordion from '../../../modules/demo/components/ActionAccordion'
import { GetServerSideProps } from 'next'
import { Order } from '../../../modules/order/types/Order'
import { OrderGroup } from '../../../modules/order/types/OrderGroup'
import handlePromise from '../../../common/utils/handlePromise'
import axios from 'axios';

type Props = {
  ordersGroup: OrderGroup[],
  tenant: string,
  errorCode: any
}

const index = ({ordersGroup, errorCode, tenant}: Props) => {
  return (
    <div>
      <Container maxWidth="lg">
        <br/>
        <FormContainer>
          <FilterForm/>
        </FormContainer>
        <br/>
        <ActionAccordion ordersGroup={ordersGroup} tenant={tenant}/>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {email, dateFrom, dateTo} = context.query
  const tenant = context.params?.tenant;
  const [errorCode, ordersGroup] = await handlePromise(axios.post(`https://api-order-prd.cc.cloudintercorpretail.pe/${tenant}/orders/group`, 
  {email, dateFrom, dateTo}).then(res => res.data))
  return {
    props: {ordersGroup, errorCode, tenant}
  }
}

export default index
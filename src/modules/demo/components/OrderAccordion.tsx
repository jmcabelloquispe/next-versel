import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';
import { Button, colors } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import red from '@material-ui/core/colors/red';
import theme from '../../../common/utils/theme';
import { Order } from '../../../modules/order/types/Order'
import Chip from '@material-ui/core/Chip';
import Moment from 'moment';
import { OrderGroup } from '../../order/types/OrderGroup';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SellerImage from '../../../common/components/SellerImage';
import {StatusChip} from '../../../common/components/StatusChip';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import OrderDetailTable from '../../demo/components/OrderDetailTable';


type Props = { 
  orders: Order[],
  tenant: string
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  button: {
    color: "white",
    backgroundColor: "#af525c",
    "&:hover": {
      backgroundColor: "#7a3940",
    },
  },
  column: {
    flexBasis: '33.33%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    backgroundColor: theme.palette.secondary.main
  }
});

export default function OrderAccordion({orders, tenant}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
                {orders.map((order, index) => (
                  <Accordion TransitionProps={{ unmountOnExit: true, timeout:0 }} key={order.orderId}>
                    <AccordionSummary
                      expandIcon={<ControlPointOutlinedIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className={classes.column}>
                        <Typography className={classes.heading}><ArrowForwardOutlinedIcon fontSize="small"/> Pedido:</Typography>
                        <Typography className={classes.heading}>{order.orderId}</Typography>
                      </div>
                      <div className={classes.column}>
                        <Typography className={classes.heading}>Tipo de Entrega:</Typography>
                        <Typography className={classes.heading}>{order.deliveryType}</Typography>
                      </div>
                      <div className={classes.column}>
                        <Typography className={classes.heading}>Despachado por:</Typography>
                        <Typography className={classes.heading}>
                          <SellerImage sellerName={order.seller.toUpperCase()} /> { order.seller}
                        </Typography>
                      </div>
                      <div className={classes.column}>
                        <Typography className={classes.heading}>Total:</Typography>
                        <Typography className={classes.heading}>{order.total}</Typography>
                      </div>
                      <div className={classes.column}>
                        <Typography className={classes.heading}>Estado:</Typography>
                        <Chip size="small" label={order.statusOrderDescription} />
                        {/* <StatusChip status={order.statusOrder} statusDescription={order.statusOrderDescription}/> */}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails >
                      <OrderDetailTable orderGroup={order.orderGroup} tenant={tenant}/>
                    </AccordionDetails>
                  </Accordion>
                ))}
                </div>
  );
}

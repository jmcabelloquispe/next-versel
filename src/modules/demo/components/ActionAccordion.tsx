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
import { Button, Chip, colors } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import red from '@material-ui/core/colors/red';
import theme from '../../../common/utils/theme';
import { Order } from '../../../modules/order/types/Order'
import Moment from 'moment';
import { OrderGroup } from '../../order/types/OrderGroup';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import SellerImage from '../../../common/components/SellerImage';
import OrderAccordion from './OrderAccordion';
import {StatusChip} from '../../../common/components/StatusChip';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

type Props = { 
  ordersGroup: OrderGroup[],
  tenant: string
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  button: {
    color: "white",
    backgroundColor: "#af525c",
    marginRight: "auto",
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

export default function ActionAccordion({ordersGroup, tenant}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {ordersGroup.map((orderGroup, index) => (
            <Accordion className={classes.container} defaultExpanded={index==0} TransitionProps={{ unmountOnExit: true, timeout:0 }} key={orderGroup.orderGroup}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions3-content"
                id="additional-actions3-header"
              >
                <div className={classes.column}>
                  <Typography className={classes.heading}><AssignmentOutlinedIcon fontSize="small"/>  Pedido:</Typography>
                  <Typography className={classes.heading}>{orderGroup.orderGroup}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Fecha de Compra:</Typography>
                  <Typography className={classes.heading}>{Moment(orderGroup.orders[0].creationDate).calendar()}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Total:</Typography>
                  <Typography className={classes.heading}>{orderGroup.groupTotal}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Estado:</Typography>
                  <Chip size="small" label={orderGroup.statusOrderDescription} />
                  {/* <StatusChip status={orderGroup.statusOrder} statusDescription={orderGroup.statusOrderDescription}/> */}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <OrderAccordion orders={orderGroup.orders} tenant={tenant}/>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                <Button size="small" variant="contained" className={classes.button}  startIcon={<CancelIcon />}>Anular Pedido</Button>
                <Button size="small" variant="contained" color="primary" startIcon={<LocalShippingOutlinedIcon/>}>
                  Despachos
                </Button>
                <Button size="small" variant="contained" color="primary" startIcon={<BuildOutlinedIcon/>}>
                  Servicios
                </Button>
                <Button size="small" variant="contained" color="primary" startIcon={<EmailOutlinedIcon/>}>
                  Comunicaciones
                </Button>
                <Button size="small" variant="contained" color="primary" startIcon={<EventAvailableIcon/>}>
                  Reprogramar Pedido
                </Button>
              </AccordionActions>
            </Accordion>
        ))}
    </div>
  );
}

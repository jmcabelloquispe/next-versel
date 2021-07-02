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
import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import red from '@material-ui/core/colors/red';
import theme from '../../../common/utils/theme';
import { Order } from '../../../modules/order/types/Order'
import Chip from '@material-ui/core/Chip';
import Moment from 'moment';

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
    backgroundColor: red[700],
    "&:hover": {
      backgroundColor: red[900],
    },
  },
  column: {
    flexBasis: '33.33%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
});

export default function ActionAccordion({orders, tenant}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {orders.map((order, index) => (
            // <TableRow key={order.orderId}>
            //   <TableCell><a href={"/order/" + tenant + "/" + order.orderGroup}>{order.orderId}</a></TableCell>
            //   <TableCell>{order.statusOrderDescription}</TableCell>
            //   <TableCell>{order.deliveryType}</TableCell>
            //   <TableCell>{Moment(order.creationDate).calendar()}</TableCell>
            //   <TableCell>{order.subTotal}</TableCell>
            //   <TableCell>{order.totalDiscount}</TableCell>
            //   <TableCell>{order.totalShipping}</TableCell>
            //   <TableCell>{order.total}</TableCell>
            // </TableRow>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions3-content"
                id="additional-actions3-header"
              >
                {/* <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox />}
                  label=""
                /> */}
                <div className={classes.column}>
                  <Typography className={classes.heading}># Pedido:</Typography>
                  <Typography className={classes.heading}>{order.orderId}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Fecha de Compra:</Typography>
                  <Typography className={classes.heading}>{Moment(order.creationDate).calendar()}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Total:</Typography>
                  <Typography className={classes.heading}>{order.total}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Tipo de Entrega</Typography>
                  <Typography className={classes.heading}>{order.deliveryType}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Despachado por:</Typography>
                  <Typography className={classes.heading}>{order.seller}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Estado:</Typography>
                  <Chip size="small" label={order.statusOrderDescription} />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {/* <Typography color="textSecondary">
                  If you forget to put an aria-label on the nested action, the label of the action will
                  also be included in the label of the parent button that controls the accordion
                  expansion.
                </Typography> */}
                <div className={classes.column}>
                  <Typography className={classes.heading}># Pedido:</Typography>
                  <Typography className={classes.heading}>{order.orderId}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Fecha de Compra:</Typography>
                  <Typography className={classes.heading}>{Moment(order.creationDate).calendar()}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Total:</Typography>
                  <Typography className={classes.heading}>{order.total}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.heading}>Tipo de Entrega</Typography>
                  <Typography className={classes.heading}>{order.deliveryType}</Typography>
                </div>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                <Button size="small" variant="contained" className={classes.button}  startIcon={<CancelIcon />}>Anular Pedido</Button>
                <Button size="small" variant="contained" color="secondary" startIcon={<EventAvailableIcon/>}>
                  Reprogramar Pedido
                </Button>
              </AccordionActions>
            </Accordion>
        ))}
    </div>
  );
}

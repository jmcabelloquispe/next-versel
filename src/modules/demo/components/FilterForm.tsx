import 'date-fns';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {TextField, InputLabel, FormControl, MenuItem, Select, Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120,
    },
    // selectEmpty: {
    //   marginTop: theme.spacing(2),
    // },
  }),
);

export default function FilterForm() {
  const classes = useStyles();

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <FormControl variant="outlined" className={classes.formControl} size="small" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">Buscar por</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Buscar por">
                <MenuItem value={10}>Correo Electronico</MenuItem>
                <MenuItem value={20}>Nro Documento</MenuItem>
                <MenuItem value={30}>Nro Nota de Venta</MenuItem>
                <MenuItem value={30}>Nro Pedido</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField id="standard-basic" label="Nro Documento" size="small" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={2}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                fullWidth
                variant="inline"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                size="small"
                id="date-picker-inline"
                label="Fecha Desde"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={2}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                fullWidth
                size="small"
                variant="inline"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="Fecha Hasta"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" fullWidth>
              Buscar 
            </Button>
          </Grid>
        </Grid>
      </form>
  );
}
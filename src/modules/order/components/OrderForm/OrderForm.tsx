import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import '../OrderForm/OrderForm.module.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& .MuiInputBase-input": {
        backgroundColor: "#f5f5f5",
        // color: "#707070"
      },
      "& .MuiFormLabel-root": {
        color: "#707070",
        zIndex: 1,
        fontSize: "12px",
        left: "4px",
        // top: "3px"
      },
      // "& .MuiInputLabel-formControl": {
      //   left: "4px"
      // }
    },
    // "& .MuiInputLabel-formControl": {
    //   transform: "translate(0, 26px) scale(1)"
    // },
    // "& .MuiInputLabel-shrink": {
    //   transform: "translate(0, 1.5px) scale(1)"
    // },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    textField: {
      "& .MuiFormLabel-root": {
        color: "#707070",
        zIndex: 1,
        fontSize: "12px",
        left: "4px",
        // top: "3px"
      },
      "& .MuiInputLabel-formControl": {
        transform: "translate(0, 27px) scale(1)"
      },
      "& .MuiInputLabel-shrink": {
        transform: "translate(0, 1.5px) scale(1)",
        transformOrigin: "top left",
        left: "0",
      }
    }
    // inputLabel: {
    //   color: "red",
    //   zIndex: 1,
    //   "&$inputFocused": {
    //     color: "orange",
    //     fontSize: "16px"
    //   }
    // },
    // inputFocused: {}
    // selectEmpty: {
    //   marginTop: theme.spacing(2),
    // },
  }),
);

export default function OrderForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [age2, setAge2] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge2(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className={classes.textField}>
            <InputLabel id="demo-simple-select-label">Seleccionar búsqueda de pedido</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField className={classes.textField} fullWidth id="standard-basic" label="Ingresar Nº Documento de identidad - RUC" />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className={classes.textField}>
            <InputLabel id="demo-simple-select-label2">Seleccionar tipo de pedido</InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select2"
              value={age2}
              onChange={handleChange2}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

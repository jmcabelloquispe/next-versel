import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ActiveLink from '../../../common/components/ActiveLink';
import { BorderRight } from '@material-ui/icons';


function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // "& MuiPaper-root.MuiAppBar-root.MuiAppBar-positionStatic.MuiAppBar-colorPrimary.MuiPaper-elevation4": {
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "white",
      height: "30px",
      borderBottom: "1px solid #bababa"
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none"
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#f5f5f5",
      borderRight: '1px solid #bababa',
      opacity: '1',
      color: "#707070",
      textTransform: "none",
      minHeight: "30px",
      padding: "0 10px",
      borderBottom: "1px solid #bababa"
    },
    "& .active": {
      backgroundColor: "#f4f7f4",
      opacity: "1",
      borderBottom: "none"
    },
    "& .MuiTabs-indicator": {
      display: "none"
    }
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs 
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example">
          <ActiveLink activeClassName="active" href="/order/pvea?email=martin.rivera.c@gmail.com&dateFrom=2021-01-01&dateTo=2021-04-04">
            <Tab label="Pedidos"/>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/">
            <Tab label="Tracking de Incidencias" />
          </ActiveLink>
        </Tabs>
      </AppBar>
    </div>
  );
}

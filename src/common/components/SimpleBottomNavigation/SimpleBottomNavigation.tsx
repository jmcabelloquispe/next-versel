import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Link from 'next/link'


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    > 
      <Link href="/order/pvea?email=martin.rivera.c@gmail.com&dateFrom=2021-01-01&dateTo=2021-04-04" passHref>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </Link>
      <Link href="/" passHref>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </Link>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
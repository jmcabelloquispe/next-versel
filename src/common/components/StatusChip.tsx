import {Chip} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const statusColor = new Map<string, string[]>([
  ["PARTIALLY_DELIVERED", ['#ffcd38', '#000000']],
  ["CANCELLED", ["#af525c", 'white']],
  ["DELIVERED", ["#5bbbb2", 'white']]
]);

type Props = {
  status: string,
  statusDescription: string
}

const useStyles = makeStyles<Theme, Props>(theme =>
  createStyles({
    root: {
      backgroundColor: ({status}) => statusColor.get(status)?.[0],
      color: ({status}) => statusColor.get(status)?.[1]
    }
  })
);


export function StatusChip({status, statusDescription}: Props) {
  const classes = useStyles({ status, statusDescription});
  return <Chip className={classes.root} size="small" label={statusDescription} />
}
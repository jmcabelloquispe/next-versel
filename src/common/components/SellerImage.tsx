
import { makeStyles } from '@material-ui/core/styles';

const sellerImageUrl = new Map<string, string>([
  ["PROMART", "https://storage.googleapis.com/mca2-customercare/PROMART/Icon/iconSellerPromart.png"],
  ["OECHSLE", "https://storage.googleapis.com/mca2-customercare/OE/PedidoRecibido/Frame.png"],
  ["PLAZAVEA", "https://storage.googleapis.com/mca2-customercare/CompraWeb/pedido_proceso_validacion_productos_promart/Plaza%20Vea.png"],
  ["VIVANDA", "https://storage.googleapis.com/mca2-customercare/Vivanda/Common/icon-seller.png"],
]);

type Props = {
  sellerName: string,
}

const useStyles = makeStyles({
  root: {
    marginRight: "5px",
  }
});


export default function SellerImage({sellerName}: Props) {
  const classes = useStyles();

  if (sellerImageUrl.get(sellerName))
    return <img className={classes.root} src={sellerImageUrl.get(sellerName)} alt={sellerName} />
  return <span></span>
}
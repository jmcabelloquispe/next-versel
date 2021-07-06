enum ESeller {
  PROMART = "https://storage.googleapis.com/mca2-customercare/PROMART/Icon/iconSellerPromart.png",
  OECHSLE = "https://storage.googleapis.com/mca2-customercare/OE/PedidoRecibido/Frame.png",
  PLAZAVEA = "https://storage.googleapis.com/mca2-customercare/CompraWeb/pedido_proceso_validacion_productos_promart/Plaza%20Vea.png",
  VIVANDA = "https://storage.googleapis.com/mca2-customercare/Vivanda/Common/icon-seller.png",
  UNKNOWN = ""
}

const SellerImageUrl = new Map<string, string>([
  ["PROMART", "https://storage.googleapis.com/mca2-customercare/PROMART/Icon/iconSellerPromart.png"],
  ["OECHSLE", "https://storage.googleapis.com/mca2-customercare/OE/PedidoRecibido/Frame.png"],
  ["PLAZAVEA", "https://storage.googleapis.com/mca2-customercare/CompraWeb/pedido_proceso_validacion_productos_promart/Plaza%20Vea.png"],
  ["VIVANDA", "https://storage.googleapis.com/mca2-customercare/Vivanda/Common/icon-seller.png"],
  ["UNKNOWN", ""]
]);

export {}
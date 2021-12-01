import * as React from 'react';

import { PedidosList } from 'features';
import { Pedido } from '../../@types';
import { listarPedidos } from '../../service/api/pedidos';
import { AuthContext } from '../../context/AuthContext';

export function PedidosScreen() {
  const {user} = React.useContext(AuthContext);
  const [pedidos, setPedidos] = React.useState<Pedido[]>([])

  React.useEffect(() => {
    if(!user?.idUsuario) return;

    listarPedidos(user?.idUsuario).then(response => setPedidos(response.data));
  }, [])

  return (
    <React.Fragment>
      <PedidosList pedidos={pedidos} />
    </React.Fragment>
  );
}

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contatos from './pages/Contatos';
import Lojas from './pages/Lojas';
import PagePedidos from './pages/Pedidos';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/contatos" component={Contatos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/Pedidos" component={PagePedidos} />
        </Switch>
    );
}

export default Routes;
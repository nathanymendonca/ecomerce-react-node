import React from 'react';
import formas_pagamento from './formas_pagamento.jpg';

class Footer extends React.Component {
    render() {
        return (
          <footer className ="my-5">
            <h4>Formas de Pagamento</h4>
            <img className="img-fluid" src={formas_pagamento} alt="Formas de pagamento " />
            <hr />&copy;Nathany Mendonça
          </footer>
        );
    }
}

export default Footer;
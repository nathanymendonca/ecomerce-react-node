import React from 'react';

export default function Lojas(props) {
    return (  <div className="row container mt-5 d-flex ml-auto mr-auto">
    <div className="col-md-4 card text-center m-2 mx-auto">
     
      <div className="card-body">
        <h5 className="card-title">São Paulo</h5>
        <div className="d-flex text-break">

          <p className="ml-auto p-2 lead">
            Rua Augusta, 472-
            Cerqueira Cesar, SP
          </p>
          
        </div>
      </div>
    </div>

    <div className="col-md-4 card text-center m-2 mx-auto">
     
      <div className="card-body">
        <h5 className="card-title">Cercanilha</h5>
        <div className="d-flex text-break">

          <p className="ml-auto p-2 lead">
            Rua João do Santo Cristo - 
            Lote 14
          </p>
          
        </div>
      </div>
    </div>

    <div className="col-md-4 card text-center m-2 mx-auto">
     
      <div className="card-body">
        <h5 className="card-title">Blumenau</h5>
        <div className="d-flex text-break">

          <p className="ml-auto p-2 lead">
           Rua Cruzeiro, 5 - 
           Vila Nova
          </p>
          
        </div>
      </div>
    </div>
</div>
);
}
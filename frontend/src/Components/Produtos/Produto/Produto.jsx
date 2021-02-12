
import { Card, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux';

function Produto(props) {

  const add = () => {
    const { dispatch } = props;
    const product = {
      id_produto: props.id_produto,
      descricao: props.descricao,
      preco_final: props.preco_final
    }
    
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });

  }


  return (
    <Col style={{ diplay: "inline-block" }} id={props.categoria} className={" boxProduto mb-2"}>
      <Card style={{ minWidth: '18rem', maxWidth: '18rem', width: '18rem' }}>
        <Card.Img variant="top" src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" />
        <Card.Body>
          <Card.Title>{props.categoria}</Card.Title>
          <Card.Text>
            <p>{props.descricao}</p>
            <p>{props.preco}</p>
            <p>{props.preco_final}</p>
          </Card.Text>
          <Button onClick={add} variant="danger">Adicionar</Button>

        </Card.Body>
      </Card>
    </Col>
  )
}

export default connect()(Produto);
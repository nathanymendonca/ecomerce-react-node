import {ListGroup} from 'react-bootstrap'
export default function Categoria(){

    const MudarCategoria = (evento) =>{
        const categoria = evento.target.id;
        let elementos = document.getElementsByClassName('boxProduto');
        for (var i = 0; i < elementos.length; i++) {
            if (categoria === elementos[i].id || categoria === "todos"){
                elementos[i].style = "display: inline-block";
            }
            else{
                elementos[i].style = "display: none";
            }
        }
    }
    return(
        <ListGroup variant="flush">
 <ListGroup.Item action onClick={MudarCategoria} id="todos" variante="secondary">Mostar todos</ListGroup.Item>
  <ListGroup.Item action onClick={MudarCategoria} id="geladeira" variante="secondary">Geladeira</ListGroup.Item>
  <ListGroup.Item action onClick={MudarCategoria} id="fogao" variante="secondary">Fogão</ListGroup.Item>
  <ListGroup.Item action onClick={MudarCategoria} id="microondas" variante="secondary">Microondas</ListGroup.Item>
  <ListGroup.Item action onClick={MudarCategoria} id="lavadora"variante="secondary">Lavadora</ListGroup.Item>
  <ListGroup.Item action onClick={MudarCategoria} id="lavalouca" variante="secondary">Lavalouça</ListGroup.Item>
</ListGroup>
    )
}
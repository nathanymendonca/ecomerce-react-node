import { useState, useEffect } from 'react';
import Produto from './Produto/Produto';
import { Container, Row } from 'react-bootstrap';


export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost:3002/produtos")

            const dados = await resposta.json()
            
            setProdutos(dados);
        }
        fetchData();
    }, []);

     return (
    
     <Container>
      <Row>
          {produtos && produtos.map(item => <Produto key={item.id_produto}
          id_produto={item.id_produto}  categoria={item.categoria} descricao={item.descricao} preco={item.preco} preco_final={item.preco_final} imagem={item.imagem}/>)}
        </Row>
    </Container>
 )
 }

import React from 'react'
import { useEffect, useState } from 'react';
import Comentarios from "./comentarios";
import { Form, Button, Table, } from 'react-bootstrap';

export default function Contatos(props) {

    
        const [comentario, setComentario] = useState([]); // chamar funcao get

        useEffect(() => {
            async function fethData() {
                const url = "http://localhost:4333/";
                const resposta = await fetch(url);
                const resultado = await resposta.json();
                setComentario(resultado);
            }
            fethData();
        }, []);

        const [form, setForm] = useState({
            nome: "",
            msg: "",
        });

        function mudaEnvio(evento) {
            form[evento.target.name] = evento.target.value;
            console.log(form);
        }

        const envioComentario = async (evento) => {
            evento.preventDefault(); // para não atualizar a pagina automaticamente

            const recPedidos = await fetch("http://localhost:4333/comentario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
        };


        return (

            <div id="formulario">
            <Form id="formC" onSubmit={envioComentario}>
              <Form.Group>
                <Form.Label> Nome: </Form.Label>
                <Form.Control
                  onChange={mudaEnvio}
                  type="text"
                  name="nome"
                  id="nome"
                />
              </Form.Group>
    
              <Form.Group>
                <Form.Label> Mensagem </Form.Label>
                <Form.Control
                  onChange={mudaEnvio}
                  type="text"
                  name="msg"
                  id="msg"
                />
              </Form.Group>
              <Button variant="dark" type="submit" id="botaoF">
                {" "}
                Enviar{" "}
              </Button>
            </Form>
    
           
    
            
            <Table>
              <tread>
                <tr>
                  <th>nome</th>
                  <th>mensagem</th>
                </tr>
              </tread>
              <tbody>
                {comentario &&
                  comentario.map((comentario) => (
                    <Comentarios
                      key={comentario.id_comentario}
                      id={comentario.id_comentario}
                      nome={comentario.nome}
                      msg={comentario.msg}
                    />
                  ))}
              </tbody>
                  </Table>
          </div>

        )

    }
   
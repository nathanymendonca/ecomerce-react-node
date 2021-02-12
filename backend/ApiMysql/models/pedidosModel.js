module.exports = () => {
   this.setPedidos = (pedidos, connection, callback) => {
    connection.query('INSERT INTO pedidos SET ?', pedidos);

   };
   
   this.getPedidos = (connection, callback) => {
    connection.query('SELECT * FROM pedidos', callback); 
   };
   return this;
   
}